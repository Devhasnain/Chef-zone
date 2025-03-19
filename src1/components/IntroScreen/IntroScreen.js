import { View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { memo } from 'react';
import { Text } from '@rneui/base';

import Styles from './introScreen.style';


///======== IntroScreen.js =========///
const starIcon = ['star', 'star', 'star', 'star', 'star']

const IntroScreen = ({ bgImg, reviewImg, content }) => {
  return (
    <ImageBackground
      source={bgImg}
      resizeMode="cover"
      style={Styles.mainImgContainer}>
      <View style={Styles.container}></View>
      <View style={Styles.reviewImgContainer}>
        <Image style={Styles.reviewImg} source={reviewImg} />
        {/* for testing purpose */}
        <View style={Styles.starContainer}>
          {starIcon.map((item, index) => (
            <Text key={index} style={Styles.starText}>
              <Icon name={item} size={22} />
            </Text>
          ))}
        </View>
        <View>
          <Text style={Styles.textStyle}>{content}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default memo(IntroScreen);
