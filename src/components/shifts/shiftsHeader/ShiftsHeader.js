import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import styles from './ShiftsHeader.style';
import {images} from '../../../config/Images';
import {useDrawerContext} from '../../../context/DrawerContext';
import Label from '../../../config/Label';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../../config/Colors';

const HomeHeader = ({navigation}) => {
  const {isDrawerOpen, setIsDrawerOpen} = useDrawerContext();
  const handleOpenDrawer = () => {
    navigation.openDrawer();
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.welcomeText]}>{Label.welcomeBack}</Text>
        <View style={[styles.userNameTextContainer]}>
          <Text style={[styles.userNameText]}>{Label.guestUserName}</Text>
          <Image
            source={images?.wavingHand}
            style={[styles.helloHand]}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleOpenDrawer}
        style={styles.profileBtn}>
        <ImageBackground
          source={images.profileBgVector}
          style={[styles.profileImgBg]}
          resizeMode="contain">
          <View style={[styles.profileImgContentContainer]}>
            <Octicons
              name="dot-fill"
              size={26}
              color={colors.primary}
              style={[styles.profileImgDot]}
            />
            <Image
              source={images?.manager}
              style={[styles.profileImg]}
              resizeMode="cover"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(HomeHeader);
