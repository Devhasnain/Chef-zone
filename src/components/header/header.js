import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { Header as RNEHeader } from '@rneui/themed';
import { Image } from 'react-native';
import React, { memo } from 'react';

import Label from '../../config/Label';
import Styles from './Header.style';


const Header = ({ title, image, style }) => {
  const navigation = useNavigation(); // Navigation hook for back action

  return (
    <RNEHeader
      containerStyle={Styles.container}
      statusBarProps={{
        barStyle: 'dark-content',
        backgroundColor: 'red',
      }}
      leftComponent={
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems:"center" }}>
          <Icon name="arrow-left" size={15} color="black" />
          <Text style={Styles.backText}>{Label.back}</Text>
        </TouchableOpacity>
      }
      centerComponent={
        image ? (
          <Image source={image} style={style} />
        ) : (
          <Text style={style}>{title}</Text>
        )
      }
    />
  );
};

export default memo(Header);
