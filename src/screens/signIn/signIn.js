import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
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
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    <View style={styles.mainContainer}>
      <ScrollView
        bounces={false}>

        {/* Logo */}
        <Image source={images.signInImg} style={styles.logo} />

        <View style={styles.container}>
          {/* Sign In Text */}
          <Title heading={Label.signIn} paragraph={Label.signInPara}/>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSignIn}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( // Handle form submission
              <>
                {/* Email Input */}
                <Input
                  placeholder={Label.email}
                  value={values.email}
                  onChange={(e) => handleChange('email', e)}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                {/* Password Input */}
                <Input
                  placeholder={Label.password}
                  onFocus={() => setPasswordVisible(true)}
                  secureTextEntry={!passwordVisible}
                  value={values.password}
                  onChange={() => handleChange('password')}
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
    </View>
  );
};

export default SignIn;
