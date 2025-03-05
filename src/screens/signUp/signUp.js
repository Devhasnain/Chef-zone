import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import { keyboardTypes } from '../../constants/KeyboardTypes.constants';
import { navigate } from '../../navigation/NavigationService';
import Button from '../../components/button/Button';
import Title from '../../components/title/title';
import Input from '../../components/input/Input';
import Label from '../../config/Label';
import styles from './signUp.style';


const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSignUp = (values) => {
        console.log('Signing up with:', values.email, values.password);
        // Add your authentication logic here
    };

    const handleNavigation = (screen) => {
        navigate(screen);
    };

    return (
        <View style={styles.container}>
            <ScrollView bounce={false}>
                <Title heading={Label.signUp} paragraph={Label.signUpPara} />

                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSignUp}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            {/* Email Input */}
                            <Input
                                placeholder={Label.email}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType={keyboardTypes.emailAddress}
                            />
                            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                            {/* Password Input */}
                            <Input
                                placeholder={Label.password}
                                onFocus={() => setPasswordVisible(true)}
                                secureTextEntry={!passwordVisible}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                            />
                            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                            {/* Confirm Password Input */}
                            <Input
                                placeholder={Label.comfirmPassword}
                                onFocus={() => setPasswordVisible(true)}
                                secureTextEntry={!passwordVisible}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                            />
                            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                            <Button additionalStyle={{ width: '100%', marginTop: 20 }} text={Label.signUp} onPress={handleSubmit} />
                        </>
                    )}
                </Formik>

                <HaveAnAccount
                    text1={Label.alreadyHaveAnAccount}
                    text2={Label.signIn}
                    onPress={() => handleNavigation('Login')}
                />
            </ScrollView>

        </View>
    );
};

export default SignUp;
