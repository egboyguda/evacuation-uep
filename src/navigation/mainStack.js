import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListScreen from '../screens/listSceens';
import accountScreen from '../screens/account';
import MapForm from '../screens/mapForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormSubmit from '../screens/fillupForm';
import DetailScreen from '../screens/details';
import Evacuees from '../screens/evacuess';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName='List'>
      <Drawer.Screen name='List' component={ListScreen} />
      <Drawer.Screen name='AccountScreen' component={accountScreen} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Drawer' component={DrawerStack} />
      <Stack.Screen name='Map' component={MapForm} />
      <Stack.Screen name='FillUp' component={FormSubmit} />
      <Stack.Screen name='Details' component={DetailScreen} />
      <Stack.Screen name='Evacuees' component={Evacuees} />
    </Stack.Navigator>
  );
};
export default MainStack;
