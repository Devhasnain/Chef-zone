import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
// import SearchBar from '../../components/home/searchBar/SearchBar';
// import PopularShifts from '../../components/popularShifts/PopularShifts';
// import MostRelevent from '../../components/mostRelevent/MostRelevent';
import AnimatedViewHandler from '../../../components/shifts/animatedView/AnimatedViewHandler';
import ShiftsHeader from '../../../components/shifts/shiftsHeader/ShiftsHeader';
import SearchBar from '../../../components/shifts/searchBar/SearchBar';
import styles from './ShiftsListing.style';
import MostRelevent from '../../../components/shifts/mostRelevent/MostRelevent';
import PopularShifts from '../../../components/shifts/popularShifts/PopularShifts';
import { images } from '../../../config/Images';

const ShiftsListing = (props) => {
  return (
    <ImageBackground
      source={images.background}
      style={[styles.container]}
      resizeMode="cover">
      <AnimatedViewHandler>
        <ShiftsHeader {...props} />
        <SearchBar />
        <FlatList
          data={['']}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={[styles.sectionsContainer]}>
              <PopularShifts />
              <MostRelevent />
            </View>
          )}
        />
      </AnimatedViewHandler>
    </ImageBackground>
  );
};

export default ShiftsListing;
