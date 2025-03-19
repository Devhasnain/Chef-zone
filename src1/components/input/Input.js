import { Image, TouchableOpacity, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { Input } from '@rneui/themed';

import globalStyle from '../../assets/styles';
import colors from '../../config/Colors';
import Styles from './input.style';


const InputField = ({
  label = '',
  value = '',
  placeholder = '',
  keyboardType = 'default',
  placeholderTextColor = colors.inputplaceholder,
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
  error = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

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
    // <View style={[globalStyle.width('100%'), additionalStyle]}>
    <Input
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      onChangeText={onChange}
      maxLength={maxLength}
      onBlur={handleBlur}
      onFocus={handleFocus}
      editable={editable}
      secureTextEntry={secureTextEntry}
      inputContainerStyle={[
        inputContainerStyle,
        inputAdditionalStyle,
        error ? {borderColor: 'red', marginBottom: -3} : {},
        isFocused ? {borderColor: colors.primary, borderWidth: 2} : {}, // Apply orange border when focused
      ]}
      containerStyle={[containerStyle, additionalStyle]}
      inputStyle={inputStyle}
      leftIcon={renderLeftIcon}
      rightIcon={renderRightIcon}
      errorMessage={error}
      errorStyle={{color: 'red'}}
    />
    // </View>
  );
};

export default memo(InputField);
