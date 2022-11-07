import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerCont}>
        <Text
          variant="headlineLarge"
          style={{fontWeight: 'bold', color: '#4f378b'}}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  innerCont: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
