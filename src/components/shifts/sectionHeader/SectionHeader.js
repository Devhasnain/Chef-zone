import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate} from '../../../navigation/NavigationService';
import styles from './SectionHeader.style';
import Label from '../../../config/Label';

const SectionHeader = ({title, link, linkText}) => {
  const redirectTo = () => {
    navigate(link);
  };
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
      {linkText && link && (
        <TouchableOpacity onPress={redirectTo} activeOpacity={0.8}>
          <Text style={[styles.btnText]}>{Label.seeAll}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(SectionHeader);
