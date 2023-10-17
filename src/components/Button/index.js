import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function Button({ onPress, title }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 0.3,
  },
});
