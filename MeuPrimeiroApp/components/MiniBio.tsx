// MiniBio.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definimos a interface para as props usando TypeScript
interface MiniBioProps {
  text: string;
}

export const MiniBio = ({ text }: MiniBioProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bioText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    width: '100%',
  },
  bioText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});