import {View, FlatList, Dimensions, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import styles from './PopularShifts.style';
import Label from '../../../config/Label';
import ShiftCard from '../shiftCard/ShiftCard';
import colors from '../../../config/Colors';

const width = Dimensions.get('window').width;

const PopularShifts = () => {
  const data = ['', '', '', '', ''];
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: false,
      listener: event => {
        const index = Math.round(
          event.nativeEvent.contentOffset.x / (width - 32),
        );
        setActiveIndex(index);
      },
    },
  );

  const renderItem = props => <ShiftCard {...props} />;

  return (
    <View style={styles.container}>
      <SectionHeader
        title={Label.popularShifts}
        link={'SomePage'}
        linkText={Label.seeAll}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onScroll={onScroll}
      />

      <View style={[styles.dotsContainer]}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: activeIndex === index ? 26 : 8,
                height: activeIndex === index ? 8 : 8,
                backgroundColor:
                  activeIndex === index
                    ? colors.primary
                    : colors.gray,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default PopularShifts;
