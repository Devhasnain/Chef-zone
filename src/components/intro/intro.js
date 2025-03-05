import { View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { memo } from 'react';
import { Text } from '@rneui/base';

import { navigate } from '../../navigation/NavigationService';
import colors from '../../config/Colors';
import Button from '../button/Button';
import Styles from './intro.style';


///======== IntroScreen.js =========///

const IntroScreen = ({
    bgImg,
    reviewImg,
    onPress,
    content,
    currentStep,
    totalSteps
}) => {

    const handlePage = () => {
        if (currentStep < totalSteps) {
            onPress();
        } else {
            navigate('WelcomeScreen');
        }
    };

    return (
        <ImageBackground
            source={bgImg}
            resizeMode="cover"
            style={Styles.mainImgContainer}>
            <View style={Styles.container}>
            </View>
            <View style={Styles.reviewImgContainer}>
                <Image style={Styles.reviewImg} source={reviewImg} />
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                    {[...Array(5)].map((_, index) => (
                        <Icon key={index} name="star" style={{ color: colors.red }} size={27} />
                    ))}
                </View>
                <View>
                    <Text style={Styles.textStyle}>{content}</Text>
                </View>
                <View style={Styles.bottomContainer}>
                    <Button additionalStyle={{ width: 70, marginLeft: 10 }} text="Skip" onPress={() => navigate('Login')} />
                    <Button additionalStyle={{ width: 70, marginRight: 10 }} text={currentStep < totalSteps ? "Next" : "Finish"} onPress={handlePage} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default memo(IntroScreen);