import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DrawerHeader.style';
import {images} from '../../../config/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../config/Colors';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDrawerContext} from '../../../context/DrawerContext';
import Label from '../../../config/Label';

const DrawerHeader = ({navigation}) => {
  const {isDrawerOpen, setIsDrawerOpen} = useDrawerContext();
  const handleCloseDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    navigation?.closeDrawer();
  };
  const handleEditProfile = () => {};
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerAlertContainer}>
        <View style={styles.headerAlert}>
          <FontAwesome name="warning" color={colors.red} size={15} />
          <Text numberOfLines={1} style={styles.headerAlertText}>
            {Label.profileWarning}
          </Text>
        </View>

        <View style={[styles.headerContainer]}>
          <View style={[styles.headerImageContainer]}>
            <Image source={images.manager} style={styles.headerImage} />
          </View>
          <View style={[styles.headerTextContainer]}>
            <Text style={[styles.headerTitle]}>{Label.guestUserName}</Text>
            <View style={[styles.reviewsOuterContainer]}>
              <View style={[styles.reviewsContainer]}>
                <FontAwesome name="star" size={16} color={colors.white} />
                <Text style={styles.textWhite}>4.9</Text>
              </View>
              <Text style={styles.textWhite}>£ 20/hour</Text>
            </View>
          </View>
          <View style={styles.editBtnContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleEditProfile}
              style={styles.editBtn}>
              <MaterialIcons name="mode-edit" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <AntDesign
        onPress={handleCloseDrawer}
        name="close"
        size={28}
        color={colors.inputPlaceHolder_2}
      />
    </View>
  );
};

export default React.memo(DrawerHeader);
