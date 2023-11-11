import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import { useNavigation, useRoute } from '@react-navigation/native';

const AssignedRoutines = () => {
  const navigation = useNavigation();
  const { firebase } = useContext(FirebaseContext);
  const [assignedRoutines, setAssignedRoutines] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const fetchAssignedRoutines = async () => {
      try {
        const userId = route.params?.userId;
        if (userId) {
          const assignedRoutinesSnapshot = await firebase.db
            .collection('AsignacionesRutinas')
            .where('clienteid', '==', userId)
            .get();

          const assignedRoutinesData = assignedRoutinesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          setAssignedRoutines(assignedRoutinesData);
        }
      } catch (error) {
        console.error('Error al obtener las rutinas asignadas:', error);
      }
    };

    fetchAssignedRoutines();
  }, [firebase, route.params?.userId]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.routineContainer}
      onPress={() =>  {
        
        // Navegar a una pantalla de detalle o hacer algo con la rutina seleccionada
        navigation.navigate('DetalleRutina', { userId });
        console.log('Rutina seleccionada:', item);
      }}
    >
      <Text style={styles.routineName}>{item.nombreRutina}</Text>
      <Text>{`Tipo de Ejercicio: ${item.tipoEjercicio}`}</Text>
      {/* Agrega aquí cualquier otra propiedad de la rutina que desees mostrar */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutinas Asignadas</Text>
      <FlatList
        data={assignedRoutines}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text>No hay rutinas asignadas.</Text>}
      />
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
    color:'#2D3748',
  },
  listContainer: {
    flexGrow: 1,
  },
  routineContainer: {
    backgroundColor: '#3E4C59',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  routineName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AssignedRoutines;
