// Profile.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MiniBio } from './MiniBio';

// Interface com os dados que o perfil precisa receber
interface ProfileProps {
  name: string;
  avatarUrl: string;
  bio: string;
}

export const Profile = ({ name, avatarUrl, bio }: ProfileProps) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: avatarUrl }} 
        style={styles.avatar} 
      />
      
      <Text style={styles.name}>{name}</Text>
      
      {/* Aqui usamos o componente MiniBio que criamos */}
      <MiniBio text={bio} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Sombras para Android
    elevation: 4,
    width: '90%',
    maxWidth: 350,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Metade da largura/altura para deixar redondo
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#007AFF', // Cor de destaque ao redor da imagem
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
});