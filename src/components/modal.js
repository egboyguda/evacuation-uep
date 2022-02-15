import React, { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';

const ModalCom = ({
  isVisible,
  onClose,
  onCall,
  options,
  title,
  notOpts,
  onChangeText,
}) => {
  const [val, setVal] = useState('');
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log('click');
        }}
      >
        <View
          style={[
            styles.container,
            isVisible ? { backgroundColor: 'rgba(0,0,0,0.5)' } : '',
          ]}
        >
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 30,
                paddingTop: 20,
                marginLeft: 20,
                fontWeight: 'bold',
                paddingBottom: 20,
              }}
            >
              Name
            </Text>
            <Input
              placeholder={'Enter the name'}
              containerStyle={{ paddingLeft: 20 }}
              onChangeText={(val) => {
                notOpts ? onChangeText(val) : setVal(val);
              }}
            />

            <Button
              title={'Submit'}
              containerStyle={{
                elevation: 2,
                alignSelf: 'center',
                width: 250,
              }}
              onPress={async () => {
                //console.log(options);
                notOpts
                  ? onCall()
                  : options
                  ? await onCall(title, val)
                  : await onCall(val);

                onClose();
              }}
            />
            <Button
              title={'Cancel'}
              containerStyle={{
                alignSelf: 'center',
                width: 250,
                paddingTop: 10,
              }}
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              onPress={() => {
                onClose();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    borderRadius: 20,
    width: 300,
    height: 250,
    alignItems: 'flex-start',

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default ModalCom;
