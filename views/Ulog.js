import React from 'react';
import { View, Text, Button } from 'react-native';

function Ulog({ navigation }) {
  const handleLogout = () => {
    // Realiza cualquier limpieza necesaria o cierre de sesión
    // Luego, navega de regreso a la pantalla de inicio de sesión o a donde desees
    alert('Has salido de tu cuenta');
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>Bienvenido a Ulog</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

export default Ulog;
