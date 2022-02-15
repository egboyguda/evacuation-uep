import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Form from '../components/form';
import Map from '../components/Map';
import { Context as apiContext } from '../context/apiContext';
import { Context as locationContext } from '../context/locationContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const FormSubmit = ({ navigation }) => {
  const { addEvacuation } = useContext(apiContext);
  const [name, setName] = useState('');
  const { state } = useContext(locationContext);
  const [capacity, setCapacity] = useState(0);
  const [address, setAdd] = useState('');
  return (
    <KeyboardAwareScrollView>
      <View>
        <Map style={{ height: 400 }} />
        <View style={{ marginVertical: 5 }}></View>
        <Form
          onChangeMail={(val) => {
            setName(val);
          }}
          onChangePass={(val) => {
            setCapacity(val);
          }}
          upperLabel={'Evacuation Center Name'}
          lowerLabel={'Max Capacity'}
          btnTitle={'Submit'}
          btnLogic={async () => {
            await addEvacuation(state.location, name, capacity, address);
            navigation.navigate('List');
          }}
          isThird={true}
          onThird={(val) => setAdd(val)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FormSubmit;
