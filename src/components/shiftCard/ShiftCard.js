import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import styles from './ShiftCard.style';


const ShiftCard = ({ shiftData }) => {
  const { date, image, title, subTitle, location, postalCode, jobType, timeAgo, salary, hour } = shiftData || {};

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.dateRow}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
      <View style={styles.body}>
        <Image source={image} style={styles.logo} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.subTitle}>({location})</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.location}>{postalCode}</Text>
          <Text style={styles.jobType}>{jobType}</Text>
        </View>
        <Text style={styles.salary}>
          {salary} <Text style={styles.hour}>{hour}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};


export default memo(ShiftCard);