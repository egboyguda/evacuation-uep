import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setNavigator } from './src/navigationRes';
import LoginStackScreen from './src/navigation/loginStack';
import { Context as AuthContext } from './src/context/authContext';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as ApiProvider } from './src/context/apiContext';
import { Provider as LocationProvider } from './src/context/locationContext';
import MainStack from './src/navigation/mainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

App = () => {
  const { state, restoreToken } = useContext(AuthContext);
  useEffect(async () => {
    var token = await AsyncStorage.getItem('token');
    //console.log(token);
    token ? restoreToken(token) : null;
  }, []);

  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.isSignIn ? (
          <Stack.Screen name='Main' component={MainStack} />
        ) : (
          <Stack.Screen name='Login' component={LoginStackScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
