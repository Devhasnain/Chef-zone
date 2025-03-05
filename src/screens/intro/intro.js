import { View } from 'react-native';
import { useState } from 'react';

import { navigate } from '../../navigation/NavigationService';
import IntroScreen from '../../components/intro/intro';
import { images } from '../../config/Images';
import Label from '../../config/Label';


export default function Intro() {
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSteps = 3; // Number of intro screens

    const handlePage = () => {
        if (activeIndex < totalSteps - 1) {
            setActiveIndex(activeIndex + 1); // Move to the next step
        } else {
            navigate('WelcomeScreen'); // Navigate to the main screen after the last step
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {activeIndex === 0 ? (
                <IntroScreen
                    bgImg={images.introBg1}
                    reviewImg={images.reviewImg1}
                    onPress={handlePage}
                    content={Label.intro1}
                    currentStep={activeIndex + 1}
                    totalSteps={totalSteps}
                />
            ) : activeIndex === 1 ? (
                <IntroScreen
                    bgImg={images.introBg2}
                    reviewImg={images.reviewImg2}
                    onPress={handlePage}
                    content={Label.intro2}
                    currentStep={activeIndex + 1}
                    totalSteps={totalSteps}
                />
            ) : activeIndex === 2 ? (
                <IntroScreen
                    bgImg={images.introBg3}
                    reviewImg={images.reviewImg3}
                    onPress={handlePage}
                    content={Label.intro3}
                    currentStep={activeIndex + 1}
                    totalSteps={totalSteps}
                />
            ) : null}
        </View>
    );
}
