// hooks/useStoragePermission.js

import {Platform, PermissionsAndroid, Alert} from 'react-native';

const useStoragePermission = async () => {
  if (Platform.OS === 'ios') {
    // iOS handles permissions automatically for document picker
    return true;
  }

  // Android
  try {
    const sdkInt = parseInt(Platform.Version, 10);

    if (sdkInt >= 33) {
      // Android 13+ (API 33+)
      const permissions = [
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      ];

      const granted = await PermissionsAndroid.requestMultiple(permissions);

      const allGranted = Object.values(granted).every(
        status => status === PermissionsAndroid.RESULTS.GRANTED,
      );

      if (!allGranted) {
        Alert.alert(
          'Permission Denied',
          'You need to grant media access permissions to use this feature.',
        );
      }

      return allGranted;
    } else {
      // Android < 13
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your files to pick a document.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'You need to grant storage access to pick files.',
        );
      }

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (err) {
    console.warn('Permission error:', err);
    return false;
  }
};

export default useStoragePermission;
