import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useDrawerContext} from '../../../context/DrawerContext';
import colors from '../../../config/Colors';
import styles from './AnimatedViewHandler.style';
import globalStyle from '../../../assets/styles';

const AnimatedViewHandler = ({children}) => {
  const {isDrawerOpen} = useDrawerContext();
  const BgAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: isDrawerOpen ? withTiming(15) : withTiming(50)},
      {translateY: isDrawerOpen ? withTiming(0) : withTiming(50)},
      {scale: isDrawerOpen ? withTiming(0.9) : withTiming(0)},
    ],
  }));

  const ContentAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {scale: isDrawerOpen ? withTiming(0.7) : withTiming(1)},
      {translateX: isDrawerOpen ? withTiming(350) : withTiming(0)},
      {translateY: isDrawerOpen ? withTiming(170) : withTiming(0)},
    ],
  }));
  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor: isDrawerOpen
              ? colors.color_FFCFD5
              : colors.transparent,
          },
          styles.animatedBgBox,
          BgAnimatedStyles,
        ]}
      />

      <Animated.View
        style={[
          {
            borderTopLeftRadius: isDrawerOpen ? 32 : 0,
            overflow: isDrawerOpen ? 'hidden' : 'visible',
            backgroundColor: isDrawerOpen ? colors.white : colors.transparent,
            elevation: isDrawerOpen ? 80 : 0,
          },
          ContentAnimatedStyles,
          globalStyle.appPHStyle,
        ]}>
        {children}
      </Animated.View>
    </>
  );
};

export default AnimatedViewHandler;
