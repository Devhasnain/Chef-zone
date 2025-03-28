import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform, SafeAreaView, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import BgImageContainer from '../../components/bgImageContainer/bgImageContainer';
import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import { keyboardTypes } from '../../constants/KeyboardTypes.constants';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import styles from './signUp.style';


const SignUp = () => {
  const { top } = useSafeAreaInsets();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dataField = { email: '', password: '', confirmPassword: '' }


  const validationSchema = Yup.object().shape({
    email: Yup.string().email(Label.invalidEmailSignUpReq).required(Label.emailSignUpReq),
    password: Yup.string()
      .min(6, Label.passwordMustBeSignUpReq)
      .required(Label.passwordSignUpReq),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref(Label.password), null], Label.passwordMatchSignUpReq)
      .required(Label.confirmPasswordSignUpReq),
  });

  const handleSignUp = values => {
    console.log('Signing up with:', values.email, values.password);
    // Add your authentication logic here
  };

  const handleNavigation = screen => {
    navigate(screen);
  };

  return (
    <BgImageContainer>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView bounces={false} style={{ paddingTop: top }}>
          {/* Logo */}
          <Image source={images.splashImg} style={styles.logo} />

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
                    additionalStyle={styles.btnadditionalStyle}
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
    </BgImageContainer>
  );
};

export default SignUp;
