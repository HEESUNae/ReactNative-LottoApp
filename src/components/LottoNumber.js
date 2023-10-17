import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Typography from './Typography';

export default function LottoNumber({ numbers }) {
  const getRandomBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    if (randomNumber === 0) return 'pink';
    if (randomNumber === 1) return 'red';
    if (randomNumber === 2) return 'gray';
    if (randomNumber === 3) return 'green';
    if (randomNumber === 4) return 'purple';
    if (randomNumber === 5) return 'orange';
  }, []);

  return (
    <View style={styles.lottoBallWrap}>
      {numbers.map((item) => (
        <View style={[{ backgroundColor: getRandomBackgroundColor() }, styles.lottoBall]} key={item}>
          <Typography color="white">{item}</Typography>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lottoBallWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    paddingVertical: 10,
  },
  lottoBall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
