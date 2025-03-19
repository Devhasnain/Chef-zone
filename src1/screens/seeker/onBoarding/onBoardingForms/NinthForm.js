import { View, Text, TouchableOpacity, Image } from 'react-native';
// DocumentsForm.js
import React, { memo, useState } from 'react';

// import DocumentPicker from '@react-native-documents/picker';
import useStoragePermission from '../../../../utils/useStoragePermission';
import { ninthFormStyle as styles } from './allForm.style';
import Title from '../../../../components/title/Title';
import { images } from '../../../../config/Images';
import Label from '../../../../config/Label';


const NinthForm = () => {
  const [selectedOption, setSelectedOption] = useState('id');
  // to pick document from storage
  // const pickDocument = async () => {
  //   const hasPermission = await useStoragePermission();
  //   if (!hasPermission) return;

  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });

  //     console.log('Selected file:', res);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log('User cancelled document picker');
  //     } else {
  //       console.error('Unknown error:', err);
  //     }
  //   }
  // };

  // Main Return
  return (
    <View style={styles.container}>
      <Title heading={Label.documents} />
      <Text style={styles.title}>{Label.documents}</Text>
      <Text style={styles.subtitle}>{Label.haveYouPassport}</Text>

      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedOption('yes')}>
          <View
            style={
              selectedOption === 'yes' ? styles.radioSelected : styles.radio
            }
          />
          <Text style={styles.radioText}>{Label.Yes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedOption('id')}>
          <View
            style={
              selectedOption === 'id' ? styles.radioSelected : styles.radio
            }
          />
          <Text style={styles.radioText}>{Label.haveAnID}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
      {Label.dopassportDescriptcuments}
      </Text>

      <Text style={styles.fieldTitle}>{Label.verifyID}</Text>
      <View style={styles.uploadBox}>
        <Image source={images.linkClip} style={styles.icon} />
      </View>

      <Text style={styles.fieldTitle}>{Label.cv}</Text>
      <View style={styles.uploadBox}>
        <Image source={images.linkClip} style={styles.icon} />
      </View>
    </View>
  );
};

export default memo(NinthForm);
