import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; // Agrega esta importación

import FirebaseContext from '../context/firebase/firebaseContext';

const AsignarClase = () => {
  const { firebase, userId } = useContext(FirebaseContext);
  const navigation = useNavigation(); // Obten la referencia de navegación

  const [clases, setClases] = useState([]);
  const [claseSeleccionada, setClaseSeleccionada] = useState('');

  useEffect(() => {
    const obtenerClases = async () => {
      try {
        const clasesSnapshot = await firebase.db.collection('Clases').get();
        const clasesData = clasesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setClases(clasesData);
      } catch (error) {
        console.error('Error al obtener las clases:', error);
      }
    };

    obtenerClases();
  }, [firebase]);

  const manejarAsignarClase = async () => {
    try {
      // Verificar si el usuario ya tiene asignada la clase seleccionada
      const snapshotUsuario = await firebase.db.collection('Clientes').doc(userId).get();
      const datosUsuario = snapshotUsuario.data();

      if (datosUsuario.clasesAsignadas && datosUsuario.clasesAsignadas.includes(claseSeleccionada)) {
        alert('Ya tienes asignada esta clase.');
        return;
      }

      // Obtener información sobre la clase seleccionada
      const datosClaseSeleccionada = clases.find((clase) => clase.id === claseSeleccionada);

      // Realizar la lógica para asignar la clase al usuario y guardar la fecha y hora actual
      const fechaHoraAsignacion = new Date();

      // Puedes actualizar la base de datos aquí
      await firebase.db.collection('ClasesAsignadas').add({
        usuarioId: userId,
        claseId: claseSeleccionada,
        nombreClase: datosClaseSeleccionada.nombreClase,
        fechaAsignacion: fechaHoraAsignacion,
      });

      // Actualizar las clases asignadas del usuario
      const nuevasClasesAsignadas = datosUsuario.clasesAsignadas
        ? [...datosUsuario.clasesAsignadas, claseSeleccionada]
        : [claseSeleccionada];
      await firebase.db.collection('Clientes').doc(userId).update({
        clasesAsignadas: nuevasClasesAsignadas,
      });

      alert('Clase asignada exitosamente');
      navigation.goBack(); // o navegar a la pantalla deseada
    } catch (error) {
      console.error('Error al asignar la clase:', error);
      alert('Ocurrió un error al asignar la clase');
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Asignar Clase</Text>

      <View style={styles.contenedorInput}>
        <Text style={styles.etiqueta}>Selecciona una Clase:</Text>
        <Picker
          selectedValue={claseSeleccionada}
          onValueChange={(valor) => setClaseSeleccionada(valor)}
          style={styles.selector}
        >
          <Picker.Item label="Selecciona una clase" value="" />
          {clases.map((clase) => (
            <Picker.Item key={clase.id} label={clase.nombreClase} value={clase.id} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity onPress={manejarAsignarClase} style={styles.boton}>
        <Text style={styles.textoBoton}>Asignar Clase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2D3748',
    marginBottom: 20,
  },
  contenedorInput: {
    marginTop: 20,
  },
  etiqueta: {
    color: '#2D3748',
  },
  selector: {
    borderWidth: 1,
    borderColor: '#2D3748',
    borderRadius: 4,
    marginTop: 8,
  },
  boton: {
    backgroundColor: '#2D3748',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AsignarClase;
