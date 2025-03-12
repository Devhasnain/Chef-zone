import { Text, View } from 'react-native';
import React, { memo } from 'react';

import labels from '../../assets/labels/English.labels';
import styles from './Drawer.style';


const Drawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{labels.hello}</Text>
    </View>
  );
};

export default memo(Drawer);
