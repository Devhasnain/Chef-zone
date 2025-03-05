import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';

import Styles from './HaveAnAccount.style';
import colors from '../../config/Colors';


const HaveAnAccount = ({text1 = '', text2 = '', onPress = () => {}}) => {
  const pressAction = useCallback(() => {
    onPress();
  }, [onPress]);
  return (
    <View style={Styles.container}>
      <Text style={[Styles.textStyle()]}>{text1}</Text>
      <Text style={[Styles.textStyle(colors.orange)]} onPress={pressAction}>
        {text2}
      </Text>
    </View>
  );
};

export default memo(HaveAnAccount);
