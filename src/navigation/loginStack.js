import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';

const LoginStack = createNativeStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        options={{ headerShown: false }}
        name='LoginScreen'
        component={LoginScreen}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
