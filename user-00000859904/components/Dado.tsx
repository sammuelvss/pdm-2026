import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface DadoProps {
  valor: number;
  size?: number;
}

const IMAGENS_DADOS: Record<number, ImageSourcePropType> = {
  1: require('../assets/images/dados/dado1.png'),
  2: require('../assets/images/dados/dado2.png'),
  3: require('../assets/images/dados/dado3.png'),
  4: require('../assets/images/dados/dado4.png'),
  5: require('../assets/images/dados/dado5.png'),
  6: require('../assets/images/dados/dado6.png'),
};

export default function Dado({ valor, size = 55 }: DadoProps) {
  const numeroSeguro = valor >= 1 && valor <= 6 ? valor : 1;
  const fonteImagem = IMAGENS_DADOS[numeroSeguro];

  return (
    <View style={styles.container}>
      <Image
        source={fonteImagem}
        style={[styles.imagem, { width: size, height: size }]}
        resizeMode="contain"
        accessibilityLabel={`Dado com valor ${numeroSeguro}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    borderRadius: 8,
  },
});

