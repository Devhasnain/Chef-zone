import React, {useRef, useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {navigate} from '../../navigation/NavigationService';
import IntroScreen from '../../components/intro/intro';
import Button from '../../components/button/Button';
import colors from '../../config/Colors';
import Styles from './intro.style';
import {introData} from './introData';

const {width} = Dimensions.get('window');
// destructuring introData object form intro file
const {introDetail} = introData;
const Intro = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < introData.length - 1) {
      flatListRef.current?.scrollToIndex({index: activeIndex + 1});
    } else {
      navigate('WelcomeScreen');
    }
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={Styles.container}>
      <FlatList
        ref={flatListRef}
        data={introDetail}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{width}}>
            <IntroScreen
              bgImg={item.bgImg}
              reviewImg={item.reviewImg}
              content={item.content}
              onPress={handleNext}
            />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      />

      <View style={Styles.bottomContainer}>
        <Button
          text="Skip"
          onPress={() => navigate('WelcomeScreen')}
          additionalTestStyle={{color: colors.primary}}
          additionalStyle={Styles.skipNextButton}
        />

        <View style={Styles.paginateContainer}>
          {introDetail.map((_, index) => (
            <View
              key={index}
              style={[
                Styles.paginate,
                activeIndex === index && Styles.activePaginate,
              ]}
            />
          ))}
        </View>

        <Button
          text={activeIndex === introDetail.length - 1 ? 'Finish' : 'Next'}
          onPress={handleNext}
          additionalTestStyle={{color: colors.primary}}
          additionalStyle={Styles.skipNextButton}
        />
      </View>
    </View>
  );
};

export default Intro;
