import React, { useContext, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
import { log } from 'react-native-reanimated';
const MapV2 = ({ style, loc }) => {
  const [markers, setMarker] = useState(null);
  //console.log(loc);
  return (
    <MapView
      style={style}
      initialRegion={{
        ...loc,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <MapView.Marker coordinate={loc} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapV2;
