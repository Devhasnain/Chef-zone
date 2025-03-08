import { Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import Styles from './Button.style';


const Button = ({
  onPress = () => {},
  text = '',
  textStyle = Styles.textStyle,
  additionalStyle = {},
  additionalTestStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.buttonStyle, additionalStyle]}>
      <Text style={[textStyle, additionalTestStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
