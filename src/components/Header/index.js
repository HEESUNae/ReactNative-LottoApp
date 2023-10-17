import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export default function Header({ title, children }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={[{ paddingTop: insets.top }, styles.header]}>
          <Text style={styles.headerTitle}>{title}</Text>
          {children}
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 16,
  },
});
