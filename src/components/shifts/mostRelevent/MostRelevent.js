import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './MostRelevent.style';
import Label from '../../../config/Label';
import SectionHeader from '../sectionHeader/SectionHeader';
import ShiftCard from '../shiftCard/ShiftCard';

const MostRelevent = () => {
  const data = ['', '', '', '', ''];
  const renderItem = props => <ShiftCard {...props} cardBg="white" />;

  return (
    <View style={styles.container}>
      <SectionHeader
        title={Label.mostRelevent}
        link={'SomePage'}
        linkText={Label.seeAll}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MostRelevent;
