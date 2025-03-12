import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import Title from '../../components/title/title';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import styles from './signIn.style';


const SignIn = () => {
  const { top } = useSafeAreaInsets();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dataField = { email: '', password: '' }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'), // Handle Email validation
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'), // Handle Password validation
  });

  const handleSignIn = (values) => {
    console.log('Logging in with:', values.email, values.password);
    // Add your authentication logic here
  };

  const handleNavigation = (screen) => {
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
          <Title heading={Label.signIn} paragraph={Label.signInPara} />

          <Formik
            initialValues={dataField}
            validationSchema={validationSchema}
            onSubmit={handleSignIn}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( // Handle form submission
              <>
                {/* Email Input */}
                <Input
                  placeholder={Label.email}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                {/* Password Input */}
                <Input
                  placeholder={Label.password}
                  onFocus={() => setPasswordVisible(true)}
                  secureTextEntry={!passwordVisible}
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                {/* Forgot Password */}
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>{Label.forgotPassword}</Text>
                </TouchableOpacity>

                <Button text={Label.signIn} onPress={handleSubmit} />
              </>
            )}
          </Formik>

          <HaveAnAccount
            text1={Label.dontHaveAnAccount}
            text2={Label.signUp}
            onPress={() => handleNavigation('SignUp')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
