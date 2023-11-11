import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Ulog({ navigation }) {
  const handleLogout = () => {
    alert('Has salido de tu cuenta');
    navigation.navigate('Login');
  };

  const handleViewRoutines = () => {
    navigation.navigate('ViewRoutines');
  };

  const handleAssignedRoutines = () => {
    navigation.navigate('AssignedRoutines');
  };

  const handleAssignedClass = () => {
    navigation.navigate('AssignedClass');
  };

  return (
    <View style={{    flex: 1,
      justifyContent: 'center',
      padding: 16, }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black',    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'#2D3748', }}>Bienvenido a Ulog</Text>

   
      <TouchableOpacity style={styles.button} onPress={handleViewRoutines}>
        <Text style={styles.buttonText}>Rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAssignedRoutines}>
        <Text style={styles.buttonText}>Ver mis Rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAssignedClass}>
        <Text style={styles.buttonText}>Elegir Clase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2D3748',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'gray',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Ulog;
