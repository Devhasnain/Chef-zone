import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import { images } from '../../config/Images';
import styles from './welcomeScreen.style';
import colors from '../../config/Colors';
import Label from '../../config/Label';


const WelcomeScreen = () => {

  const handleNavigate = (screen) => {

    if (screen === 'SignIn') {
      navigate('AuthStack', { screen: screen });
    }
    else {
      navigate(screen);
    };
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.signInImg} style={styles.logo} />
      </View>
      <Text style={styles.welcomeText}>{Label.welcomeScreenHeader}</Text>
      <Text style={styles.title}>{Label.brandName}</Text>
      <View style={styles.buttonContainer}>
        <Button additionalTestStyle={{ color: colors.accent }} additionalStyle={{ marginBottom: 15, backgroundColor: colors.secondary }} text={Label.welcomeScreenButtonText1} onPress={() => handleNavigate('SignIn')} />
        <Button additionalTestStyle={{ color: colors.accent }} additionalStyle={{ marginBottom: 15, backgroundColor: colors.secondary }} text={Label.welcomeScreenButtonText2} onPress={() => handleNavigate('BusinessRegister')} />
        <Button additionalTestStyle={{ color: colors.accent }} additionalStyle={{ marginBottom: 15, backgroundColor: colors.secondary }} text={Label.welcomeScreenButtonText3} onPress={() => handleNavigate('BrowserJob')} />
        <Button additionalTestStyle={{ color: colors.accent }} additionalStyle={{ marginBottom: 15, backgroundColor: colors.secondary }} text={Label.welcomeScreenButtonText4} onPress={() => handleNavigate('CVLive')} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
