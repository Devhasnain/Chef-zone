import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import {navigate} from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import {images} from '../../config/Images';
import Label from '../../config/Label';
import styles from './signIn.style';
import useStoragePermission from '../../utils/useStoragePermission';
// import DocumentPicker from 'react-native-document-picker';
import {pick} from '@react-native-documents/picker';
import CameraCapture from '../../components/camera/CameraCapture';

const SignIn = () => {
  const {top} = useSafeAreaInsets();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const dataField = {email: '', password: ''};

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(Label.invalidEmailSignUpReq)
      .required(Label.emailSignUpReq),
    password: Yup.string()
      .min(6, Label.passwordMustBeSignUpReq)
      .required(Label.passwordSignUpReq),
  });

  const handleSignIn = values => {
    console.log('Logging in with:', values.email, values.password);
  };

  const handleNavigation = screen => {
    navigate(screen);
  };
  // to pick document from storage
  const pickDocument = async () => {
    const hasPermission = await useStoragePermission();

    if (!hasPermission) return;

    try {
      const [pickResult] = await pick();
      console.log(pickResult, 'jdsfjskdjfkdsjfk');
    } catch (err) {
      console.log(err, 'dkjsfdskjfksdjfk');
    }
  };
  const handlePhotoTaken = uri => {
    console.log('📸 Captured URI:', uri);
    // Upload to server or set in state
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{paddingTop: top}}>
        <Image source={images.signInImg} style={styles.logo} />

        <View style={styles.container}>
          <Title heading={Label.signIn} paragraph={Label.signInPara} />

          <Formik
            initialValues={dataField}
            validationSchema={validationSchema}
            onSubmit={handleSignIn}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <>
                <Input
                  placeholder={Label.email}
                  value={values.email}
                  onChange={handleChange('email')}
                  error={touched.email && errors.email}
                />

                <Input
                  placeholder={Label.password}
                  onFocus={() => setPasswordVisible(true)}
                  secureTextEntry={!passwordVisible}
                  value={values.password}
                  onChange={handleChange('password')}
                  error={touched.password && errors.password}
                />

                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>
                    {Label.forgotPassword}
                  </Text>
                </TouchableOpacity>

                <Button
                  text={Label.signIn}
                  onPress={() => {
                    handleSubmit();
                    navigate('SeekerOnBoarding');
                  }}
                />
              </>
            )}
          </Formik>

          <HaveAnAccount
            text1={Label.dontHaveAnAccount}
            text2={Label.signUp}
            onPress={() => {
              // handleNavigation('SignUp');
              // pickDocument();
              setOpenCamera(true);
            }}
          />
          {openCamera && (
            <View style={{flex: 1}}>
              <CameraCapture onCapture={handlePhotoTaken} />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
