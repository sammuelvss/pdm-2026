import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function Calculadora() {
  const [idadeDigitada, setIdadeDigitada] = useState('');
  const [diaDigitado, setDiaDigitado] = useState('');
  const [mesDigitado, setMesDigitado] = useState('');

  let anoNascimento = null;

  
  if (idadeDigitada && diaDigitado && mesDigitado) {
    const idade = parseInt(idadeDigitada);
    const diaNascimento = parseInt(diaDigitado);
    const mesNascimento = parseInt(mesDigitado);

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1; 
    const diaAtual = dataAtual.getDate();

   
    const jaFezAniversario = 
      mesAtual > mesNascimento || 
      (mesAtual === mesNascimento && diaAtual >= diaNascimento);

   
    if (jaFezAniversario) {
      anoNascimento = anoAtual - idade;
    } else {
      anoNascimento = anoAtual - idade - 1;
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Descubra seu Ano de Nascimento</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Sua idade atual (ex: 22)"
        maxLength={3}
        value={idadeDigitada}
        onChangeText={setIdadeDigitada}
      />

      
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputMetade]}
          keyboardType="numeric"
          placeholder="Dia (ex: 15)"
          maxLength={2}
          value={diaDigitado}
          onChangeText={setDiaDigitado}
        />
        
        <TextInput
          style={[styles.input, styles.inputMetade]}
          keyboardType="numeric"
          placeholder="Mês (ex: 08)"
          maxLength={2}
          value={mesDigitado}
          onChangeText={setMesDigitado}
        />
      </View>

      
      {anoNascimento !== null && !isNaN(anoNascimento) && (
        <Text style={styles.resultado}>
          Você nasceu no ano de {anoNascimento}.
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#989696',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  inputMetade: {
    width: '48%', 
  },
  resultado: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
  },
});
