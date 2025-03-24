import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DrawerItem.style';
import {Image} from 'react-native';
import { navigate } from '../../../navigation/NavigationService';

const DrawerItem = ({data, handleOnPress = ''}) => {
  const handleNavigate = () => {
    if (handleOnPress) {
      handleOnPress();
    } else {
      navigate(data?.name ?? '');
    }
  };
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      activeOpacity={0.8}
      style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image source={data?.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={[styles.tabLable]}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(DrawerItem);
