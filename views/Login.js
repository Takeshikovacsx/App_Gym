import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'react-router-dom'; // Esto no es necesario en React Native

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleContrasenaChange = (text) => {
    setContrasena(text);
  };

  const handleLogin = async () => {
    try {
      // Coloca aquí la lógica para autenticar con Firebase, como en tu código original
      // ...

      // Supongamos que la autenticación es exitosa
      alert('Inicio de sesión exitoso');
      onLogin();
      navigation.navigate('Menu'); // Reemplaza 'Ulog' con la ruta correcta
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        Sign in to your account
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text>Email address</Text>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email address"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            padding: 8,
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          value={contrasena}
          onChangeText={handleContrasenaChange}
          secureTextEntry
          placeholder="Password"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            padding: 8,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: 'indigo',
          borderRadius: 4,
          padding: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign in</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, textAlign: 'center', color: 'gray' }}>
        Not a member?{' '}
        {/* Debes implementar la navegación a la pantalla de registro */}
        <Link to="/Registro" style={{ fontWeight: 'bold', color: 'indigo' }}>
          Register
        </Link>
      </Text>
    </View>
  );
}

export default Login;
