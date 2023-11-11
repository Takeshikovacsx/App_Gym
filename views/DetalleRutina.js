import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import { useRoute } from '@react-navigation/native';

const DetalleRutina = () => {
  const { firebase } = useContext(FirebaseContext);
  const [detalleRutina, setDetalleRutina] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { rutinaId } = route.params;

  useEffect(() => {
    const fetchDetalleRutina = async () => {
      try {
        const rutinaRef = await firebase.db.collection('Rutinas').doc(rutinaId).get();
        const rutinaData = rutinaRef.data();
        setDetalleRutina(rutinaData);
      } catch (error) {
        console.error('Error al obtener detalles de la rutina:', error);
        // Manejar el error, mostrar mensaje al usuario, etc.
      } finally {
        setIsLoading(false); // Indica que la carga ha terminado, ya sea con éxito o error
      }
    };

    fetchDetalleRutina();
  }, [firebase, rutinaId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Rutina Asignada</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#2D3748" />
      ) : (
        <View style={styles.rutinaContainer}>
          <Text style={styles.rutinaTitle}>Nombre de la Rutina: {detalleRutina?.nombreRutina}</Text>
          <Image source={{ uri: detalleRutina?.imagen }} style={styles.rutinaImage} />
          <Text style={styles.rutinaText}>Tipo de Ejercicio: {detalleRutina?.tipoEjercicio}</Text>
          <Text style={styles.rutinaText}>Duración de la Rutina: {detalleRutina?.duracionRutina} minutos</Text>
          <Text style={styles.rutinaText}>Descripción: {detalleRutina?.descripcion}</Text>
        </View>
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
  rutinaContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#2D3748',
    borderRadius: 8,
    padding: 16,
  },
  rutinaTitle: {
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
  rutinaText: {
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
  },
});

export default DetalleRutina;
