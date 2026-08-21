import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calculadora } from '../components/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo cinza bem claro para destacar o card branco
    alignItems: 'center',
    justifyContent: 'center',
  },
});