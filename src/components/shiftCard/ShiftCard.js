import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';

import styles from './ShiftCard.style';
import Label from '../../config/Label';
import Button from '../button/Button';


const ShiftCard = ({ shiftData }) => {
  const { date, image, title, subTitle, location, postalCode, jobType, timeAgo, salary, hour } = shiftData || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.dateRow}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        <View style={styles.body}>
          <Image source={image} style={styles.logo} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.location}>{location} ({postalCode})</Text>
            <Text style={styles.jobType}>{jobType}</Text>
          </View>
          <Text style={styles.salary}>
            {salary} <Text style={styles.hour}>{hour}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button text={Label.review} additionalStyle={styles.reviewBtn} additionalTestStyle={styles.reviewBtnText}/>
        <Button text={Label.detail} additionalStyle={styles.detailBtn} additionalTestStyle={styles.detailBtnText}/>
      </View>
    </View>
  );
};


export default memo(ShiftCard);