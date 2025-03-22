import React, {memo, useCallback, useState} from 'react';
import {View, Image, Alert} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import Button from '../button/Button';
import styles from './cameraCapture.style';
import {usePermission} from '../../utils/usePermission';

const CameraCapture = ({onCapture}) => {
  const [imageUri, setImageUri] = useState(null);

  const {isGranted, requestPermission} = usePermission('camera');
  // function to take images
  const handleOpenCamera = useCallback(async () => {
    const isCameraGranted = await requestPermission();
    if (!isCameraGranted) {
      Alert.alert('Permission Denied', 'Camera permission is required.');
      return;
    }
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
          console.log(response.errorMessage, 'response.errorMessage');
        } else {
          const uri = response.assets?.[0]?.uri;
          setImageUri(uri);
          onCapture && onCapture(uri);
        }
      },
    );
  }, []);
  // Main Return
  return (
    <View style={styles.container}>
      <Button text="Open Camera" onPress={handleOpenCamera} />
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={styles.preview}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default memo(CameraCapture);
