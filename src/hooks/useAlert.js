import React from 'react';
import { Alert } from 'react-native';
export default () => {
  const AlertMsg = (alertTitle, alertMsg) => {
    Alert.alert(alertTitle, alertMsg, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };
  return [AlertMsg];
};
