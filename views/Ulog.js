import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';




function Ulog({ navigation }) {
  const handleLogout = () => {
    // Realiza cualquier limpieza necesaria o cierre de sesión
    // Luego, navega de regreso a la pantalla de inicio de sesión o a donde desees
    alert('Has salido de tu cuenta');
    navigation.navigate('Login');
  };
  const handleViewRoutines = () => {
    // Navegar a la pantalla ViewRoutines
    navigation.navigate('ViewRoutines');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>Bienvenido a Ulog</Text>

      <Button  style={styles.button} title="Rutinas" onPress={() => navigation.navigate('ViewRoutines')}>Rutinas</Button>
      <Button  style={styles.button} title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

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
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  label: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    color: 'black',
  },
  button: {
    backgroundColor: 'indigo',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default Ulog;
