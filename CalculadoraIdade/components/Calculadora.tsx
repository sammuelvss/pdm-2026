import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function Calculadora() {
  const [anoDigitado, setAnoDigitado] = useState('');
  const anoAtual = new Date().getFullYear();

  // Calcula a idade apenas se houver algo digitado
  const idade = anoDigitado ? anoAtual - parseInt(anoDigitado) : null;

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Descubra sua Idade</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite seu ano de nascimento (ex: 2004)"
        maxLength={4}
        value={anoDigitado}
        onChangeText={setAnoDigitado}
      />

      {/* Só exibe o resultado se o cálculo for um número válido */}
      {idade !== null && !isNaN(idade) && (
        <Text style={styles.resultado}>
          Você tem ou fará {idade} anos em {anoAtual}.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f21818',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});