import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde React Navigation
import FirebaseContext from '../context/firebase/firebaseContext';
import firebase from '../firebase';

function Login() {
  const { onLogin } = useContext(FirebaseContext); // Utiliza useContext para acceder a funciones de FirebaseContext
  const navigation = useNavigation(); // Accede al objeto de navegación

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
      const userSnapshot = await firebase.db
        .collection('Clientes')
        .where('email', '==', email)
        .get();

      if (!userSnapshot.empty) {
        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.contrasena === contrasena) {
          // Contraseña válida, inicio de sesión exitoso
          alert('Inicio de sesión exitoso');
          navigation.navigate('Ulog'); // Utiliza el nombre de la pantalla, no una ruta
        } else {
          // Contraseña incorrecta
          alert('Contraseña incorrecta');
        }
      } else {
        // Usuario no encontrado
        alert('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'black', marginBottom: 20 }}>
        Sign in to your account
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'black' }}>Email address</Text>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email address"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            padding: 8,
            color: 'black'
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'black' }}>Password</Text>
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
            color: 'black'
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
          marginTop: 20
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
