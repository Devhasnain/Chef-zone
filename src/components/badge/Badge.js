import {Text, View} from 'react-native';
import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import colors from '../../config/Colors';
import styles from './Badge.style';

const Badge = ({title = 'Temporary', cardBg}) => {
  return (
    <View
      // colors={
      //   cardBg === 'white'
      //     ? [colors.badge_linear_white, colors.badge_linear_white]
      //     : [colors.badge_linear, colors.badge_linear]
      // }
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 0}}
      style={[styles.container]}>
      <Text
        style={[
          {color: cardBg === 'white' ? colors.color_585858 : colors.color_FD9},
          styles.badgeText,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default React.memo(Badge);
