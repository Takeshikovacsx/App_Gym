import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

const DetalleRutina = ({ route }) => {
  const { firebase } = useContext(FirebaseContext);
  const [detalleAsignacion, setDetalleAsignacion] = useState(null);
  const [detalleRutina, setDetalleRutina] = useState(null);

  useEffect(() => {
    const fetchDetalleAsignacion = async () => {
      try {
        const asignacionId = route.params?.rutina.id;
        const asignacionRef = await firebase.db.collection('AsignacionesRutinas').doc(asignacionId).get();
        const asignacionData = asignacionRef.data();
        setDetalleAsignacion(asignacionData);

        // Obtener detalles de la rutina asociada
        const rutinaRef = await firebase.db.collection('Rutinas').doc(asignacionData?.rutinaid).get();
        const rutinaData = rutinaRef.data();
        setDetalleRutina(rutinaData);
      } catch (error) {
        console.error('Error al obtener detalles de la asignación:', error);
      }
    };

    fetchDetalleAsignacion();
  }, [firebase, route.params?.rutina.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Asignación</Text>

      {detalleAsignacion && detalleRutina ? (
        <View style={styles.asignacionContainer}>
          <Text style={styles.asignacionTitle}>Nombre de la rutina: {detalleAsignacion?.nombreRutina}</Text>

          
          
          {/* Mostrar la imagen de la rutina */}
          <Image source={{ uri: detalleRutina?.imagen }} style={styles.rutinaImage} />

          {/* Mostrar toda la información de la rutina */}
          <Text style={styles.rutinaInfo}>Tipo de Ejercicio: {detalleRutina?.tipoEjercicio}</Text>
          <Text style={styles.rutinaInfo}>Duración: {detalleRutina?.duracionRutina} minutos</Text>
          <Text style={styles.rutinaInfo}>Descripción: {detalleRutina?.descripcion}</Text>
          <Text>{`Fecha de Asignación: ${detalleAsignacion?.fechaAsignacion.toDate().toLocaleDateString()}`}</Text>

          {/* Agrega aquí cualquier otra propiedad de la asignación o la rutina que desees mostrar */}
        </View>
      ) : (
        <Text>No hay detalles disponibles.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2D3748',
  },
  asignacionContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#2D3748',
    borderRadius: 8,
    padding: 16,
  },
  asignacionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  rutinaImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  rutinaInfo: {
    color: 'white',
    marginTop: 8,
  },
});

export default DetalleRutina;
