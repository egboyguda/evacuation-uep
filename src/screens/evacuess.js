import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text, Input, Button, ActivityIndicator } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Person from '../components/person';
import { Context as ApiContext } from '../context/apiContext';
import DateTimePicker from '@react-native-community/datetimepicker';

const Evacuees = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const { _id } = route.params;
  const { getEvacuees, state } = useContext(ApiContext);
  //console.log(_id);
  useEffect(() => {
    const fetch = navigation.addListener('focus', async () => {
      await getEvacuees(_id);
      console.log(state.evacuees);
    });

    return fetch;
  }, [navigation]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    //console.log(currentDate.getTime());
    getEvacuees(_id, date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView>
      <View style={{ height: 8 }}></View>
      <View>
        <Button onPress={showDatepicker} title='Select Date' />
      </View>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
      <FlatList
        data={state.evacuees}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <Person name={item.name} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Evacuees;
