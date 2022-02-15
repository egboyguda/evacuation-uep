import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/locationContext';

const MapForm = ({ navigation }) => {
  const { state } = useContext(LocationContext);
  //console.log(state);
  return (
    <View style={{ flex: 1 }}>
      <Map style={{ flex: 1 }} />
      {state.location ? (
        <Button
          style={{
            position: 'absolute', //use absolute position to show button on top of the map
            top: '50%', //for center align
            alignSelf: 'flex-end',
          }}
          title={'Set Evacuation Location'}
          onPress={() => {
            navigation.navigate('FillUp');
          }}
        />
      ) : null}
    </View>
  );
};

export default MapForm;
