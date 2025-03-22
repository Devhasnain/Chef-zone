import {useState, useEffect} from 'react';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

// Permission list using in this app
const permissionMap = {
  camera: Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  }),
  microphone: Platform.select({
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
  }),
  storage: Platform.select({
    ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  }),
  media: Platform.select({
    android: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  }),
  photos: Platform.select({
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  }),
  location: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }),
};

export const usePermission = permissionType => {
  const [isGranted, setIsGranted] = useState(false);

  const permission = permissionMap[permissionType];

  const checkAndRequest = async () => {
    if (!permission) return false;
    try {
      const status = await check(permission);
      if (status === RESULTS.GRANTED) {
        setIsGranted(true);
        return true;
      } else {
        const requestStatus = await request(permission);
        const granted = requestStatus === RESULTS.GRANTED;
        setIsGranted(granted);
        return granted;
      }
    } catch (error) {
      console.error('Permission error:', error);
      return false;
    }
  };

  useEffect(() => {
    checkAndRequest();
  }, [permission]);

  return {isGranted, requestPermission: checkAndRequest};
};
