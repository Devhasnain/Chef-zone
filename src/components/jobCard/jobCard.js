import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import styles from './jobCard.style';


const JobCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>30-06-2025 - 14 shifts</Text>
        <FontAwesome name="heart-o" size={20} color="black" />
      </View>
      <View style={styles.body}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Wimbledon.svg/1200px-Wimbledon.svg.png' }} style={styles.logo} />
        <View>
          <Text style={styles.title}>Kitchen porter</Text>
          <Text style={styles.subTitle}>Wimbledon Tennis Championships (London)</Text>
          <View style={styles.locationRow}>
            <FontAwesome name="map-marker" size={16} color="black" />
            <Text style={styles.location}> 3924.72 miles . SW195AG</Text>
          </View>
          <Text style={styles.timeAgo}>3 w ago</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.temporaryBadge}>
          <Text style={styles.badgeText}>Temporary</Text>
        </TouchableOpacity>
        <Text style={styles.salary}>£15.33 <Text style={styles.hour}>/hour</Text></Text>
      </View>
    </View>
  );
};


export default JobCard;
