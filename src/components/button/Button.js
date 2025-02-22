import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './Button.style';

const Button = ({
  onPress = () => {},
  text = '',
  textStyle = Styles.textStyle,
  additionalStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.buttonStyle, additionalStyle]}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
