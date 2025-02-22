import {Input} from '@rneui/themed';
import React, {memo, useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../config/Colors';
import Styles from './Input.style';
import globalStyle from '../../assets/styles';

const InputField = ({
  label = '',
  value = '',
  placeholder = '',
  keyboardType = 'default',
  placeholderTextColor = colors.color_667085,
  editable = true,
  secureTextEntry = false,
  inputContainerStyle = Styles.inputContainerStyle,
  containerStyle = Styles.containerStyle,
  inputStyle = Styles.inputStyle,
  additionalStyle = {},
  inputAdditionalStyle = {},
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  pressOnLeftIcon = () => {},
  pressOnRightIcon = () => {},
  leftIcon = '',
  rightIcon = '',
  maxLength = 10000,
}) => {
  const rightPress = useCallback(() => {
    pressOnRightIcon();
  }, [pressOnRightIcon]);

  const leftPress = useCallback(() => {
    pressOnLeftIcon();
  }, [pressOnLeftIcon]);

  const renderRightIcon = () => {
    if (!rightIcon) return null;
    return (
      <TouchableOpacity onPress={rightPress}>
        <Image source={rightIcon} />
      </TouchableOpacity>
    );
  };

  const renderLeftIcon = () => {
    if (!leftIcon) return null;
    return (
      <TouchableOpacity onPress={leftPress}>
        <Image source={leftIcon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[globalStyle.width('100%'), additionalStyle]}>
      <Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        onChangeText={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
        onFocus={onFocus}
        editable={editable}
        secureTextEntry={secureTextEntry}
        inputContainerStyle={[inputContainerStyle, inputAdditionalStyle]}
        containerStyle={[containerStyle, additionalStyle]}
        inputStyle={inputStyle}
        leftIcon={renderLeftIcon}
        rightIcon={renderRightIcon}
      />
    </View>
  );
};

export default memo(InputField);
