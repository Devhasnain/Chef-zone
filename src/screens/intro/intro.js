import { ScrollView, Text, View, Dimensions } from 'react-native';
import { useRef, useState } from 'react';

import { navigate } from '../../navigation/NavigationService';
import IntroScreen from '../../components/intro/intro';
import Button from '../../components/button/Button';
import { images } from '../../config/Images';
import colors from '../../config/Colors';
import Label from '../../config/Label';
import Styles from './intro.style';


const { width } = Dimensions.get('window');

const Intro = () => {
    const scrollViewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSteps = 3;

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setActiveIndex(index);
    };

    const handleNext = () => {
        if (activeIndex < totalSteps - 1) {
            scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * width, animated: true });
        } else {
            navigate('WelcomeScreen');
        }
    };

    return (
        <View style={Styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {[images.introBg1, images.introBg2, images.introBg3].map((bgImg, index) => (
                    <View key={index} style={{ width }}>
                        <IntroScreen
                            bgImg={bgImg}
                            reviewImg={images[`reviewImg${index + 1}`]}
                            onPress={handleNext}
                            content={Label[`intro${index + 1}`]}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={Styles.bottomContainer}>
                <Button additionalTestStyle={{ color: colors.primary }} additionalStyle={{ width: 70, backgroundColor: "none" }} text="Skip" onPress={() => navigate('WelcomeScreen')} />
                <View style={Styles.paginateContainer}>
                    {[...Array(totalSteps)].map((_, index) => (
                        <Text key={index} style={[Styles.paginate, activeIndex === index ? Styles.activePaginate : null]}></Text>
                    ))}
                </View>
                <Button additionalTestStyle={{ color: colors.primary }} additionalStyle={{ width: 70, backgroundColor: "none" }} text={activeIndex === totalSteps - 1 ? "Finish" : "Next"} onPress={handleNext} />
            </View>
        </View>
    );
};

export default Intro;
