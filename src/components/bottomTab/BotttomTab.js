import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { memo } from 'react';

import colors from '../../config/Colors';
import styles from './BotttomTab.style';
import Label from '../../config/Label';


const BottomTab = ({ state, navigation }) => {
  const tabs = [
    { name: Label.shifts, icon: 'calendar' },
    { name: Label.messages, icon: 'envelope' },
    { name: Label.notification, icon: 'bell' },
    { name: Label.profile, icon: 'user' },
  ];
  const {bottom} = useSafeAreaInsets()

  return (
    // <View style={styles.container}>
    //   {tabs.map((tab, index) => {
    //     const isActive = state.index === index;

    //     return (
    //       <TouchableOpacity
    //         key={index}
    //         onPress={() => navigation.navigate(tab.name)}
    //         style={[styles.tabButton, isActive && styles.activeTab]}
    //       >
    //         <Icon
    //           name={tab.icon}
    //           size={22}
    //           color={isActive ? colors.primary : colors.accentLight}
    //           style={styles.icon}
    //         />
    //         <Text style={isActive ? styles.activeText : styles.text}>{tab.name}</Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>
    <></>
  );
};

export default memo(BottomTab);


