// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Profile } from '../components/Profile'; // Ajuste o caminho se estiver em outra pasta

export default function App() {
  return (
    <View style={styles.container}>
      <Profile 
        name="Sammuel Victor"
        avatarUrl="https://media.licdn.com/dms/image/v2/D4E03AQGP5tKdKlYFGg/profile-displayphoto-scale_400_400/B4EZ3WClqEHcAk-/0/1777412497936?e=1788998400&v=beta&t=kkSZKsITgRZ_wcg2LscIOi2rGIJ9YwQDdiKSXFOk_Ng" // URL de exemplo
        bio="Estudante de Sistemas para Internet na UNICAP e entusiasta em Desenvolvimento de Sistemas. Focado em criar soluções eficientes com Java, React e inovação tecnológica."
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