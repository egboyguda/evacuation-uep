import React, { useContext, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import Form from '../components/form';
import { FontAwesome } from '@expo/vector-icons';
import { Context as authContext } from '../context/authContext';
import useAlert from '../hooks/useAlert';
const LoginScreen = () => {
  const { state, signIn } = useContext(authContext);
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [AlertMsg] = useAlert();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 50 }}>Login</Text>
      <Form
        onChangeMail={(val) => {
          setUsername(val);
        }}
        onChangePass={(val) => {
          setPass(val);
        }}
        upperLabel={'Email'}
        lowerLabel={'Password'}
        isPassword={true}
        btnTitle={'Login'}
        btnLogic={() => {
          //console.log(username);
          username && password
            ? signIn(username, password)
            : AlertMsg('Complete Form', 'Please Complete the Form to Submit');
        }}
        upperIcon={<FontAwesome name='user' size={24} color='#bec4c0' />}
        lowerIcon={<FontAwesome name='lock' size={24} color='#bec4c0' />}
      />
      {state.errorMsg ? (
        <Text style={{ color: 'red', fontSize: 20 }}>Invalid Credential</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});
export default LoginScreen;
