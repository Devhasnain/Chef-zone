import React, {memo, useCallback} from 'react';
import {Text, View} from 'react-native';
import colors from '../../config/Colors';
import Styles from './HaveAnAccount.style';

const HaveAnAccount = ({text1 = '', text2 = '', onPress = () => {}}) => {
  const pressAction = useCallback(() => {
    onPress();
  }, [onPress]);
  return (
    <View style={Styles.container}>
      <Text style={[Styles.textStyle()]}>{text1}</Text>
      <Text style={[Styles.textStyle(colors.themeColor)]} onPress={pressAction}>
        {text2}
      </Text>
    </View>
  );
};

export default memo(HaveAnAccount);
