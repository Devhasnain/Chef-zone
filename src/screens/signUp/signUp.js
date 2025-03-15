import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform, SafeAreaView, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import { keyboardTypes } from '../../constants/KeyboardTypes.constants';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import Title from '../../components/title/title';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import styles from './signUp.style';


const SignUp = () => {
  const { top } = useSafeAreaInsets();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dataField = { email: '', password: '', confirmPassword: '' }


  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSignUp = values => {
    console.log('Signing up with:', values.email, values.password);
    // Add your authentication logic here
  };

  const handleNavigation = screen => {
    navigate(screen);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.mainContainer}>
      <ScrollView bounces={false} style={{ paddingTop: top }}>
        {/* Logo */}
        <Image source={images.signInImg} style={styles.logo} />

        <View style={styles.container}>
          {/* Sign In Text */}
          <Title heading={Label.signUp} paragraph={Label.signUpPara} />

          <Formik
            initialValues={dataField}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* Email Input */}
                <Input
                  placeholder={Label.email}
                  value={values.email}
                  onChange={handleChange('email')}
                  keyboardType={keyboardTypes.emailAddress}
                  error={touched.email && errors.email}
                />

                {/* Password Input */}
                <Input
                  placeholder={Label.password}
                  onFocus={() => setPasswordVisible(true)}
                  secureTextEntry={!passwordVisible}
                  value={values.password}
                  onChange={handleChange('password')}
                  error={touched.password && errors.password}
                />

                {/* Confirm Password Input */}
                <Input
                  placeholder={Label.comfirmPassword}
                  onFocus={() => setPasswordVisible(true)}
                  secureTextEntry={!passwordVisible}
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={touched.confirmPassword && errors.confirmPassword}
                />

                <Button
                  additionalStyle={{ width: '100%', marginTop: 20 }}
                  text={Label.signUp}
                  onPress={() => {
                    handleSubmit();
                    navigate('SeekerOnBoarding');
                  }}
                />
              </>
            )}
          </Formik>

          <HaveAnAccount
            text1={Label.alreadyHaveAnAccount}
            text2={Label.signIn}
            onPress={() => handleNavigation('SignIn')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
