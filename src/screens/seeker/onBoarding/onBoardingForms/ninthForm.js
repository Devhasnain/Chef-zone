import { View, Text, TouchableOpacity, Image } from 'react-native';
// DocumentsForm.js
import React, { useState } from 'react';

import { ninthFormStyle as styles } from "./allForm.style";
import Title from '../../../../components/title/title';
import { images } from '../../../../config/Images';


const NinthForm = () => {
  const [selectedOption, setSelectedOption] = useState('id');

  return (
    <View style={styles.container}>
        <Title heading={"Documents"}/>
      <Text style={styles.title}>Documents</Text>
      <Text style={styles.subtitle}>Do you have a passport?</Text>

      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedOption('yes')}
        >
          <View style={selectedOption === 'yes' ? styles.radioSelected : styles.radio} />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedOption('id')}
        >
          <View style={selectedOption === 'id' ? styles.radioSelected : styles.radio} />
          <Text style={styles.radioText}>No, I have an ID</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        If you are a British citizen but do not have a passport, we will require you to upload it
      </Text>

      <Text style={styles.fieldTitle}>Verify ID</Text>
      <View style={styles.uploadBox}>
        <Image source={images.linkClip} style={styles.icon} />
      </View>

      <Text style={styles.fieldTitle}>CV</Text>
      <View style={styles.uploadBox}>
        <Image source={images.linkClip} style={styles.icon} />
      </View>
    </View>
  );
};

export default NinthForm;
