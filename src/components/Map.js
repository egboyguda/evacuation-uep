import React, { useContext, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
const Map = ({ style }) => {
  const [markers, setMarker] = useState(null);
  const { state, addLocation } = useContext(LocationContext);
  console.log(state.location);
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: 12.53577,
        longitude: 124.874608,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      onPress={(e) => addLocation(e.nativeEvent.coordinate)}
    >
      {state.location && <MapView.Marker coordinate={state.location} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
