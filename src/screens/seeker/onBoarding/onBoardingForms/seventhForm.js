import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { Video } from 'expo-av';


const policiesData = [
  { title: 'Chef Zone – Strike Policy', signed: true },
  { title: 'Alcohol and Drugs Policy', signed: false },
  { title: 'Chef Zone Terms for Workers', signed: false },
  { title: 'Chef Zone Vulnerable Adult Policy', signed: true },
];



const SeventhForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [policies, setPolicies] = useState(policiesData);

  const handleVideoPress = (video) => {
    setSelectedVideo(video);
    setModalVisible(true);
  };

  const togglePolicy = (index) => {
    const updatedPolicies = [...policies];
    updatedPolicies[index].signed = !updatedPolicies[index].signed;
    setPolicies(updatedPolicies);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Conditional shift offer agreements</Text>
      <Text style={styles.subheading}>Please review and agree to the following</Text>

      {policies.map((policy, index) => (
        <TouchableOpacity key={index} style={styles.policyContainer} onPress={() => togglePolicy(index)}>
          <Icon
            name={policy.signed ? 'check-circle' : 'radio-button-unchecked'}
            size={24}
            color={policy.signed ? 'orange' : 'grey'}
            style={styles.checkBox}
          />
          <Text style={styles.policyText}>{policy.title}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Videos and assessments</Text>
      {videos.map((video, index) => (
        <TouchableOpacity key={index} style={styles.videoItem} onPress={() => handleVideoPress(video.source)}>
          <Text style={styles.videoText}>• {video.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Video Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {/* {selectedVideo && (
            <Video
              source={{ uri: selectedVideo }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              useNativeControls
              style={styles.videoPlayer}
            />
          )} */}
          <Button title="Close" onPress={() => setModalVisible(false)} color="orange" />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 15 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subheading: { fontSize: 16, color: 'grey', marginBottom: 20 },
  policyContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkBox: { marginRight: 10 },
  policyText: { fontSize: 16, color: 'black' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  videoItem: { paddingVertical: 10 },
  videoText: { fontSize: 16, color: 'darkblue' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)' },
  videoPlayer: { width: '90%', height: 300 },
});

export default SeventhForm;
