import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { Text, SpeedDial } from 'react-native-elements';

import ListItemCom from '../components/listItem';
import { Context as ApiContext } from '../context/apiContext';
import { Context as AuthContext } from '../context/authContext';

const ListScreen = ({ navigation }) => {
  const { getData, state } = useContext(ApiContext);
  const [refreshing, setRef] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetch = navigation.addListener('focus', async () => {
      setOpen(false);
      await getData();
    });
    return fetch;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {state.data ? null : (
        <ActivityIndicator
          size='large'
          color='#0000ff'
          style={{
            flex: 1,
          }}
        />
      )}
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
          />
        }
        data={state.data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <ListItemCom
              name={item.name}
              address={item.address}
              capacity={item.capacity}
              evacuees={item.evacuees}
              btnLogic={() => {
                navigation.navigate('Details', { _id: item._id });
              }}
            />
          );
        }}
      />

      <SpeedDial
        color='green'
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title='Add'
          onPress={() => navigation.navigate('Map')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title='Delete'
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </View>
  );
};

export default ListScreen;
