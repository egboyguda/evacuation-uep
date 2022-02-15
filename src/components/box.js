import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const Box = () => {
  return (
    <View style={styles.box}>
      <Text style={{ textAlign: 'center' }}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 130,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Box;
