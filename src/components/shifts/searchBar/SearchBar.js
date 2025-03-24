import {View, TextInput} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../config/Colors';
import styles from './SearchBar.style';
import Label from '../../../config/Label';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" color={colors.inputPlaceHolder_2} size={22} />
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={colors.inputPlaceHolder_2}
        placeholder={Label.searchInputPlaceholder}
        cursorColor={colors.inputPlaceHolder_2}
      />
    </View>
  );
};

export default React.memo(SearchBar);
