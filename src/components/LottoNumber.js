import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Typography from './Typography';

export default function LottoNumber({ numbers }) {
  const [viewHieght, setViewHieght] = useState(0);
  const [animatedValue] = useState(new Animated.Value(1));

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHieght * 0.6, 0],
  });

  // 로또 공 색상
  const getRandomBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    if (randomNumber === 0) return 'pink';
    if (randomNumber === 1) return 'red';
    if (randomNumber === 2) return 'gray';
    if (randomNumber === 3) return 'green';
    if (randomNumber === 4) return 'purple';
    if (randomNumber === 5) return 'orange';
  }, []);

  // numbers 가 셋팅되고 나서 실행
  useEffect(() => {
    animatedValue.setValue(0); // 0으로 기초값 셋팅
    Animated.timing(animatedValue, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [numbers]);

  return (
    <View
      style={[styles.lottoBallWrap]}
      // width, height , x, y 정보제공
      onLayout={({ nativeEvent }) => {
        setViewHieght(nativeEvent.layout.height);
      }}
    >
      {numbers.map((item) => (
        <Animated.View
          style={[
            { backgroundColor: getRandomBackgroundColor(), transform: [{ translateY: translateY }] },
            styles.lottoBall,
          ]}
          key={item}
        >
          <Typography color="white">{item}</Typography>
        </Animated.View>
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
