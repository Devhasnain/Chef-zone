import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import { images } from '../../config/Images';
import styles from './welcomeScreen.style';
import Label from '../../config/Label';


const WelcomeScreen = () => {

  const handleNavigate = (screen) => {
    navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.signInImg} style={styles.logo} />
      </View>
      <Text style={styles.welcomeText}>{Label.welcomeScreenHeader}</Text>
      <Text style={styles.title}>{Label.welcomeScreenTile}</Text>

      <Button additionalStyle={{ marginBottom: 10, width: '80%' }} text={Label.welcomeScreenButtonText1} onPress={() => handleNavigate('Login')} />
      <Button additionalStyle={{ marginBottom: 10, width: '80%' }} text={Label.welcomeScreenButtonText2} onPress={() => handleNavigate('Login')} />
      <Button additionalStyle={{ marginBottom: 10, width: '80%' }} text={Label.welcomeScreenButtonText3} onPress={() => handleNavigate('Login')} />
      <Button additionalStyle={{ width: '80%' }} text={Label.welcomeScreenButtonText4} onPress={() => handleNavigate('Login')} />

    </View>
  );
};

export default WelcomeScreen;
