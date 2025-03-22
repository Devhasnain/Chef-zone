import { ImageBackground, View, StatusBar } from 'react-native';
import React from 'react';

import styles from './bgImageContainer.style';
import { images } from '../../config/Images';


export const BgImageContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <ImageBackground source={images.background} style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default BgImageContainer;
