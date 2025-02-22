import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import labels from '../../assets/labels/English.labels';
import styles from './Home.style';

const Home = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => {}}>
        <Text>{labels.home}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
