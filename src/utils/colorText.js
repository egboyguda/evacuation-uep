import React from 'react';
import { Text } from 'react-native-elements';

export default () => {
  const CText = (props) => (
    <Text style={{ color: props.backgroungColor }}>{props.children}</Text>
  );
  return [CText];
};
