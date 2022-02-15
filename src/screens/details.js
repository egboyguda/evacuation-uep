import React, { useContext, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import ModalCom from '../components/modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '../components/box';
import Map from '../components/Map';
import MapV2 from '../components/MapV2';
import { Context as ApiContext } from '../context/apiContext';
import useAlert from '../hooks/useAlert';
const DetailScreen = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const { state, addEvacuees } = useContext(ApiContext);
  const { _id } = route.params;
  const evacuation = state.data.find((e) => e._id === _id);
  const { coordinates } = evacuation.location;
  const [name, setName] = useState('');
  const [AlertMsg] = useAlert();
  return (
    <SafeAreaView>
      <View>
        <ModalCom
          isVisible={show}
          onClose={() => {
            setShow(false);
          }}
          onCall={async () => {
            await addEvacuees(name, evacuation._id);
            AlertMsg('Successful', 'Added Successfully');
          }}
          notOpts={true}
          onChangeText={(val) => {
            setName(val);
          }}
        />
        <MapV2 style={{ height: 400 }} loc={coordinates} />

        <View style={{ backgroundColor: 'white', marginBottom: 5, height: 80 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '700',
              marginTop: 15,
              textTransform: 'capitalize',
            }}
          >
            {evacuation.name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'grey',
              textTransform: 'capitalize',
            }}
          >
            {evacuation.address}
          </Text>
        </View>
        <View style={styles.btn}></View>
        <Button
          title={'Add Evacuees'}
          onPress={() => {
            setShow(true);
          }}
        />
        <View style={styles.btn}></View>
        <Button
          title={'View Evacuees'}
          onPress={() => navigation.navigate('Evacuees', { _id })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 5,
  },
});

export default DetailScreen;
