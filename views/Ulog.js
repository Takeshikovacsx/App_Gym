import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>Bienvenido a Ulog</Text>

      <Button style={styles.button} title="Rutinas" onPress={handleViewRoutines} />
      <Button style={styles.button} title="Ver mis Rutinas" onPress={handleAssignedRoutines} />
      <Button style={styles.button} title="Cerrar sesión" onPress={handleLogout} />

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
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Ulog;
