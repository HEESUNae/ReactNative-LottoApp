import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Space from '../components/Space';
import LottoNumber from '../components/LottoNumber';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNumbers } from '../redux/actions/lottoNumbers';

export default function HomeScreen() {
  const numbers = useSelector((state) => state.numbers.currentNumber);
  const dispatch = useDispatch();

  // 로또 번호 무작위 6개 추출
  const onPressGetNumber = useCallback(() => {
    dispatch(createNewNumbers());
  }, []);

  useEffect(() => {
    onPressGetNumber();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="HOME"></Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <View style={styles.lottoBox}>{numbers.length === 6 && <LottoNumber numbers={numbers} />}</View>
          <Space space={20} />
          <Button onPress={onPressGetNumber} title="로또 번호 추출하기" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lottoBox: {
    minWidth: '90%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'gray',
    height: 120,
  },
});
