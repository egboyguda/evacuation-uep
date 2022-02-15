import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';

const Person = ({ name }) => {
  return (
    <View style={{ margin: 2 }}>
      <ListItem.Swipeable
        rightContent={
          <Button
            title='Delete'
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        }
      >
        <Icon name='person' type='ionicon' />

        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
        </ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};

export default Person;
