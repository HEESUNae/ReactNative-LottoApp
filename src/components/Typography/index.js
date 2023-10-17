import React from 'react';
import { Text } from 'react-native';

export default function Typography({ size, weight, color, children }) {
  return <Text style={{ fontSize: size, fontWeight: weight, color: color }}>{children}</Text>;
}
