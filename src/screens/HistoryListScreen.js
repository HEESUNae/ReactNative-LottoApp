import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Typography from '../components/Typography';
import LottoNumber from '../components/LottoNumber';
import { useSelector } from 'react-redux';

export default function HistoryListScreen() {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <Header title="HISTORY"></Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View style={styles.historyList}>
            <Typography size={16}>
              {item.date.getFullYear()}. {item.date.getMonth() + 1}. {item.date.getDate()}
            </Typography>
            <LottoNumber numbers={item.numbers} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  historyList: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 15,
    backgroundColor: '#fff',
  },
});
