import { View, Text, Image, ScrollView } from "react-native";
import React, { memo } from "react";

import { behaviours, benefits, qualifications, roles, shifts } from "../../constants/constant";
import styles from "./JobDetailScreen.style";
import { images } from "../../config/Images";
import Button from "../button/Button";


const JobDetailScreen = () => {


  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={{paddingVertical:25}}>
      {/* Event Details */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.eventTitle}>Wimbledon Tennis Championships</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>
      </View>

      {/* Job Role Card */}
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>Chef de partie</Text>
        <View style={styles.jobCardItem}>
          <View>
            <Text style={styles.jobSubText}>Hourly rate (inc. holiday pay)</Text>
            <Text style={styles.jobSubTextApprox}>Approximate salary</Text>
          </View>
          <View style={styles.salaryContainer}>
            <Text style={styles.salaryText}>£ 20.17</Text>
            <Text style={styles.approxSalary}>£ 3873.14</Text>
          </View>
        </View>
      </View>

      {/* Shift Dates List */}
      <View>
        {shifts.map((item, index) => (
          <View key={index} style={styles.shiftItem}>
            <Text style={styles.shiftText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>SW195AG, London, SW195AG</Text>
      </View>

      {/* Warning Message */}
      <View style={styles.warningCard}>
        <Text style={styles.warningText}>
          This adviser has chosen not to accept applicants from outside the EU & UK.
        </Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Event name</Text>
        <Text style={styles.jobDetailPara}>Wimnledom Championships:</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Event description:</Text>
        <Text style={styles.jobDetailPara}>ATP world tour</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Shift type:</Text>
        <Text style={styles.jobDetailPara}>Temporary</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>About shift:</Text>
        <Text style={styles.jobDetailPara}>Lead</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailPara}>Smart transitions automatically add fades and other animations between scenes, giving your audience a silky smooth ride, and saving you all the time you’d spend adding that stuff yourself. Smart transitions automatically add fades and other animations between scenes, giving your audience a silky smooth ride, and saving you all the time you’d spend adding that stuff yourself.</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>The benefits we offer you:</Text>
        {benefits.map((item, index) => (
          <View key={index} style={styles.benefitsContainer}>
            <Text>✓ </Text>
            <Text key={index} style={styles.benefitsText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Shift role:</Text>
        <Text style={styles.jobDetailPara}>Chef de partie</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Skills:</Text>
        {roles.map((item, index) => (
          <Text key={index} style={styles.jobDetailPara}>• {"   "} {item}</Text>
        ))}
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Qualifications:</Text>
        {qualifications.map((item, index) => (
          <Text key={index} style={styles.jobDetailPara}>• {"   "} {item}</Text>
        ))}
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Skills:</Text>
        {behaviours.map((item, index) => (
          <Text key={index} style={styles.jobDetailPara}>• {"   "} {item}</Text>
        ))}
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Uniform:</Text>
        <Image source={images.splashImg} style={{
          width: 150,
          height: 150,
          marginVertical: 10
        }} />
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>First aid facilities:</Text>
        <Text style={styles.jobDetailPara}>Yes</Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>No of workers: <Text style={styles.jobDetailPara}>25</Text></Text>
        <Text style={styles.jobDetailHeading}>Break paid: <Text style={styles.jobDetailPara}>Yes</Text></Text>
        <Text style={styles.jobDetailHeading}>Break duration: <Text style={styles.jobDetailPara}>60 minutes</Text></Text>
      </View>

      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobDetailHeading}>Location:</Text>
      </View>

      <Button text="Apply" />

    </ScrollView>
  );
};



export default memo(JobDetailScreen);
