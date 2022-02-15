import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import colorText from '../utils/colorText';
import { Text, Card } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItemCom = ({ name, address, capacity, btnLogic, evacuees }) => {
  const [Ctext] = colorText();
  console.log(evacuees);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 90,
        backgroundColor: 'white',
        marginTop: 5,
        justifyContent: 'flex-start',
      }}
    >
      <View style={styles.list}>
        <View style={{ marginRight: 15, marginTop: 15 }}>
          <MaterialCommunityIcons name='warehouse' size={60} color='green' />
        </View>
      </View>
      <View style={{ justifyContent: 'space-evenly', alignSelf: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>
          {name}
        </Text>
        <Text style={{ fontWeight: '700', color: 'grey' }}>{address}</Text>
        <Text style={{ fontWeight: '700', color: 'grey' }}>
          Capacity:<Ctext backgroungColor={'green'}>{capacity}</Ctext>
        </Text>

        <Text style={{ fontWeight: '500' }}>
          <Ctext backgroungColor={'green'}>{evacuees.length}</Ctext>/
          <Ctext backgroungColor={'red'}>{capacity}</Ctext>
        </Text>
      </View>
      <View style={{ alignSelf: 'center', marginLeft: 'auto' }}>
        <TouchableOpacity
          onPress={() => {
            btnLogic();
          }}
        >
          <MaterialIcons name='arrow-forward-ios' size={30} color='grey' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
});
export default ListItemCom;
