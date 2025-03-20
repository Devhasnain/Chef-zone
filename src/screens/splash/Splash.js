import { Alert, Image, View } from 'react-native';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { images } from '../../config/Images';
import styles from './Splash.style';


const Splash = ({navigation}) => {
  useEffect(() => {
    async function navigate() {
      setTimeout(async function () {
        navigation.replace('Intro');
      }, 2000);
    }
    navigate();
  }, []);

  return (
    <View style={[styles.container]}>
      <Image source={images.splashImg} style={styles.fullScreen} />
    </View>
  );
};

export default Splash;
