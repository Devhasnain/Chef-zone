import { View, Image, ImageBackground } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@rneui/base';

import Styles from './intro.style';


///======== IntroScreen.js =========///

const IntroScreen = ({
    bgImg,
    reviewImg,
    content,
}) => {


    return (
        <ImageBackground
            source={bgImg}
            resizeMode="cover"
            style={Styles.mainImgContainer}>
            <View style={Styles.container}>
            </View>
            <View style={Styles.reviewImgContainer}>
                <Image style={Styles.reviewImg} source={reviewImg} />
                <View style={Styles.starContainer}>
                    {[...Array(5)].map((_, index) => (
                        <Text key={index} style={Styles.starText}>
                            ★
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