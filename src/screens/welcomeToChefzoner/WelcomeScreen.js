import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';

import BgImageContainer from '../../components/bgImageContainer/bgImageContainer';
import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import { buttonsData } from './welcomeScreenData';
import { images } from '../../config/Images';
import styles from './welcomeScreen.style';
import colors from '../../config/Colors';
import Label from '../../config/Label';


const WelcomeScreen = () => {
  const handleNavigate = (screen) => {
    if (screen === 'BusinessOnBoarding' || screen === 'SignIn') {
      navigate('AuthStack', { screen: screen });
    } else {
      navigate(screen);
    }
  };

  const handleNavigation = (screen) => {
    navigate(screen);
  };

  return (
    <BgImageContainer>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>{Label.welcomeScreenHeader}</Text>
        <Image source={images.splashImg} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            additionalTestStyle={styles.additionalTestStyle}
            additionalStyle={styles.additionalStyle}
            text={button.text}
            onPress={() => handleNavigate(button.screen)}
          />
        ))}
      </View>
    </BgImageContainer>
  );
};

export default WelcomeScreen;

