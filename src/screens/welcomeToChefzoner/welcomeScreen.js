import { View, Text, Image } from 'react-native';
import React from 'react';

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
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            additionalTestStyle={{ color: colors.accent }}
            additionalStyle={{ marginBottom: 15, backgroundColor: colors.secondary }}
            text={button.text}
            onPress={() => handleNavigate(button.screen)}
          />
        ))}
      </View>
    </View>
  );
};

export default WelcomeScreen;
