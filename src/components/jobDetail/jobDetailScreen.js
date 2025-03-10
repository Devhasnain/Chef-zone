import React, { memo } from "react";
import { View, Text, FlatList  } from "react-native";
import styles from "./jobDetail.style";

const JobDetailScreen = () => {
  const shifts = [
    "30-06-2025  11:00-23:00",
    "01-07-2025  11:00-23:00",
    "02-07-2025  11:00-23:00",
    "03-07-2025  11:00-23:00",
    "04-07-2025  11:00-23:00",
    "05-07-2025  11:00-23:00",
    "06-07-2025  11:00-23:00",
    "07-07-2025  11:00-23:00",
    "09-07-2025  11:00-23:00",
    "10-07-2025  11:00-23:00",
    "11-07-2025  11:00-23:00",
    "12-07-2025  11:00-23:00",
    "13-07-2025  11:00-23:00",
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* <Icon name="arrow-left" size={20} color="#333" style={styles.backIcon} /> */}

      {/* Event Details */}
      <View style={styles.header}>
        {/* <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.eventImage} /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.eventTitle}>Wimbledon Tennis Championships</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>
      </View>

      {/* Job Role Card */}
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>Chef de partie</Text>
        <Text style={styles.jobSubText}>Hourly rate (inc. holiday pay)</Text>
        <View style={styles.salaryContainer}>
          <Text style={styles.salaryText}>£ 20.17</Text>
          <Text style={styles.approxSalary}>£ 3873.14</Text>
        </View>
      </View>

      {/* Shift Dates List */}
      <FlatList
        data={shifts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.shiftItem}>
            <Text style={styles.shiftText}>{item}</Text>
          </View>
        )}
      />

      {/* Location */}
      <View style={styles.locationContainer}>
        {/* <Icon name="map-marker-alt" size={20} color="#333" /> */}
        <Text style={styles.locationText}>SW195AG, London, SW195AG</Text>
      </View>

      {/* Warning Message */}
      <View style={styles.warningCard}>
        <Text style={styles.warningText}>
          This adviser has chosen not to accept applicants from outside the EU & UK.
        </Text>
      </View>
    </View>
  );
};



export default memo(JobDetailScreen);
