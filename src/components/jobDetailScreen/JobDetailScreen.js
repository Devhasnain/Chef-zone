import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import { images } from '../../config/Images';


const WimbledonShiftCard = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={images.splashImg}
          style={styles.logo}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>Wimbledon Tennis Championship</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>4.9</Text>
            <Text style={styles.daysAgo}>4d ago</Text>
          </View>
        </View>
      </View>

      {/* Pay Details */}
      <View style={styles.payContainer}>
        <Text style={styles.rate}>Hourly Rate (inc. holiday pay)</Text>
        <Text style={styles.salary}>£22</Text>
        <Text style={styles.approxSalary}>Approximate Salary</Text>
        <Text style={styles.salary}>£3873.55</Text>
      </View>

      {/* Shift Date & Time */}
      <Text style={styles.sectionHeader}>Shift Date & Time</Text>
      <Text style={styles.location}>📍 SW195AG, London, SW195AG</Text>
      {[...Array(4)].map((_, index) => (
        <Text key={index} style={styles.shiftTime}>📅 30-06-2025  |  09:00 pm - 11:30 pm</Text>
      ))}

      {/* Warning Message */}
      <View style={styles.warningContainer}>
        <Icon name="exclamation-circle" size={18} color="#D32F2F" />
        <Text style={styles.warning}>This advertiser has chosen not to accept applicants from outside the EU.</Text>
      </View>

      {/* Event Details */}
      <Text style={styles.eventName}>Event Name: Wimbledon Championships</Text>
      <Text style={styles.eventDescription}>Event Description: ATP world tour</Text>

      {/* About Job Section */}
      <Text style={styles.aboutJobHeader}>About Job</Text>
      <Text style={styles.aboutJobText}>
        We are searching for experienced chefs to join our wonderful team.
        We supply clients all across London and beyond. Perfectly suited to anybody wanting excellent...
      </Text>

      {/* Select Shift Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Shift</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F9FAFB', borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, margin: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  logo: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  headerText: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1D4ED8' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  rating: { fontSize: 14, color: '#555', marginLeft: 5 },
  daysAgo: { fontSize: 12, color: '#888', marginLeft: 10 },
  payContainer: { backgroundColor: '#E0F2FE', padding: 10, borderRadius: 10, marginVertical: 10 },
  rate: { fontSize: 16, color: '#555' },
  salary: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  approxSalary: { fontSize: 14, color: '#555', marginBottom: 10 },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginTop: 10 },
  location: { fontSize: 14, color: '#64748B', marginBottom: 5 },
  shiftTime: { fontSize: 14, color: '#555', marginBottom: 5 },
  warningContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEE2E2', padding: 10, borderRadius: 5, marginBottom: 10 },
  warning: { marginLeft: 10, color: '#B91C1C', fontSize: 14 },
  eventName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  eventDescription: { fontSize: 14, color: '#555', marginBottom: 10 },
  aboutJobHeader: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  aboutJobText: { fontSize: 14, color: '#555', marginBottom: 20 },
  button: { backgroundColor: '#1D4ED8', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default WimbledonShiftCard;
