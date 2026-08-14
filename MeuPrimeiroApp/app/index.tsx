// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Profile } from '../components/Profile'; // Ajuste o caminho se estiver em outra pasta

export default function App() {
  return (
    <View style={styles.container}>
      <Profile 
        name="Sammuel Victor"
        avatarUrl="" // URL de exemplo
        bio="Sistemas Para Internet (Unicap)."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef', // Fundo um pouco mais escuro para destacar o card branco
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o card na tela
  },
});