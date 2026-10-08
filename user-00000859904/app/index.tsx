import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      
      {user ? (
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>ID:</Text>
            <Text style={styles.value}>{user.objectId}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Usuário:</Text>
            <Text style={styles.value}>{user.username}</Text>
          </View>

          {user.email && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>E-mail:</Text>
              <Text style={styles.value}>{user.email}</Text>
            </View>
          )}

          <View style={styles.infoRow}>
            <Text style={styles.label}>Criado em:</Text>
            <Text style={styles.value}>{new Date(user.createdAt).toLocaleDateString()}</Text>
          </View>
        </View>
      ) : (
        <Text>Nenhum usuário logado.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 32,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    width: 80,
    color: '#555',
  },
  value: {
    flex: 1,
    color: '#333',
  },
  button: {
    backgroundColor: '#DC3545',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});