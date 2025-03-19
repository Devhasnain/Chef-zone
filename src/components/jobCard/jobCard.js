import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import { navigate } from '../../navigation/NavigationService';
import styles from './JobCard.style';


const JobCard = ({jobItem}) => {
  // use destructuring
  const {date, image, title, subTitle, location, postalCode, jobType, timeAgo, salary, hour} = jobItem || {};

  //Main Return
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigate('JobDetail')}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.body}>
        <Image source={image} style={styles.logo} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.subTitle}>({location})</Text>
          <View style={styles.locationRow}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.location}>{postalCode}</Text>
          <Text style={styles.jobType}>{jobType}</Text>
        </View>
        <View>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
          <Text style={styles.salary}>
            {salary} <Text style={styles.hour}>{hour}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(JobCard);
