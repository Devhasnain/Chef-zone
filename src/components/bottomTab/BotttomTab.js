import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { memo } from 'react';

import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import styles from './BotttomTab.style';


const BottomTab = ({ state, navigation }) => {
  const tabs = [
    { name: 'Shifts', icon: 'calendar' },
    { name: 'Messages', icon: 'envelope' },
    { name: 'Notification', icon: 'bell' },
    { name: 'Profile', icon: 'user' },
  ];
  const {bottom} = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tab.name)}
            style={[styles.tabButton, isActive && styles.activeTab]}
          >
            <Icon
              name={tab.icon}
              size={22}
              color={isActive ? colors.primary : colors.accentLight}
              style={styles.icon}
            />
            <Text style={isActive ? styles.activeText : styles.text}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(BottomTab);


