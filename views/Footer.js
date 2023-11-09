import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>&copy; 2023 Vitality Gym. Todos los derechos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'indigo', // Puedes cambiar el color de fondo según tus preferencias
    padding: 10,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Footer;
