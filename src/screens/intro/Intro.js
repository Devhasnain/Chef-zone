import React, { useCallback, useRef, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import IntroScreen from '../../components/IntroScreen/IntroScreen';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import colors from '../../config/Colors';
import { introData } from './introData';
import Styles from './intro.style';


const { width } = Dimensions.get('window');
// destructuring introData object form intro file
const { introDetail } = introData;
const Intro = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < introDetail.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
    } else {
      navigate('WelcomeScreen');
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;
  // to render dots for pagination
  const renderDots = useCallback(
    (_, index) => (
      <View
        key={index}
        style={[
          Styles.paginate,
          activeIndex === index && Styles.activePaginate,
        ]}
      />
    ),
    [activeIndex],
  );

  // render intro content Item
  const renderIntroContent = useCallback(({ item, index }) => {
    return (
      <View style={{ width }} key={index}>
        <IntroScreen
          bgImg={item.bgImg}
          reviewImg={item.reviewImg}
          content={item.content}
          onPress={handleNext}
        />
      </View>
    );
  }, []);

  return (
    <View style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={introDetail}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderIntroContent}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <View style={Styles.bottomContainer}>
        <Button
          text="Skip"
          onPress={() => navigate('WelcomeScreen')}
          additionalTestStyle={{ color: colors.primary }}
          additionalStyle={Styles.skipNextButton}
        />
        <View style={Styles.paginateContainer}>
          {introDetail.map(renderDots)}
        </View>
        <Button
          text={activeIndex === introDetail.length - 1 ? 'Finish' : 'Next'}
          onPress={handleNext}
          additionalTestStyle={{
            color: colors.primary,
          }}
          additionalStyle={Styles.skipNextButton}
        />
      </View>
    </View>
  );
};
export default Intro;