import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';

import styles from './jobCard.style';


const JobCard = ({jobData}) => {

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{jobData.date}</Text>
      </View>
      <View style={styles.body}>
        <Image source={jobData.image} style={styles.logo} />
        <View>
          <Text style={styles.title}>{jobData.title}</Text>
          <Text style={styles.subTitle}>{jobData.subTitle}</Text>
          <Text style={styles.subTitle}>({jobData.location})</Text>
          <View style={styles.locationRow}>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.location}>{jobData.postalCode}</Text>
            <Text style={styles.badgeText}>{jobData.badgeText}</Text>
        </View>
        <View>
          <Text style={styles.timeAgo}>{jobData.timeAgo}</Text>
          <Text style={styles.salary}>{jobData.salary} <Text style={styles.hour}>{jobData.hour}</Text></Text>
        </View>
      </View>
    </View>
  );
};


export default memo(JobCard);