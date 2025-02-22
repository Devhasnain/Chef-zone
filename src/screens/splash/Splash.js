/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Alert, Image, View} from 'react-native';
import {images} from '../../config/Images';
import styles from './Splash.style';

const Splash = ({navigation}) => {
  useEffect(() => {
    async function navigate() {
      setTimeout(async function () {
        navigation.replace('Login');
      }, 2000);
    }
    navigate();
  }, []);

  return (
    <View style={[styles.container]}>
      <Image source={images.splashBg} style={styles.fullScreen} />
    </View>
  );
};

export default Splash;
