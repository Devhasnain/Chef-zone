import { Image, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AgreeTermsAndPolicy from "../../../components/agreeTermsAndPolicy/AgreeTermsAndPolicy";
import { navigate } from "../../../navigation/NavigationService";
import Header from "../../../components/header/Header";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { images } from "../../../config/Images";
import Label from "../../../config/Label";
import styles from "./onBoarding.style";


const BusinessOnBoarding = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const dataField = {
        business: '',
        contactName: '',
        brandName: '',
        companyNumber: '',
        vatNumber: '',
        mobileNumber: '',
        address: '',
        city: '',
        postcode: '',
        description: ''
    }

    const openImagePicker = () => {
        Alert.alert(Label.uploadPhoto, Label.chooseOption, [
            { text: Label.takePhoto, onPress: () => console.log('Take Photo') },
            { text: Label.uploadPhoto, onPress: () => console.log('Upload Photo') },
            { text: Label.cancel, style: 'cancel' },
        ]);
    };

    const validationSchema = Yup.object().shape({
        business: Yup.string().required(Label.businessNameReq),
        contactName: Yup.string().required(Label.contactNameReq),
        brandName: Yup.string().required(Label.brandNameReq),
        companyNumber: Yup.string().required(Label.companyDescriptionReq),
        vatNumber: Yup.string().required(Label.VATNameReq),
        mobileNumber: Yup.string().matches(/^\d{10}$/, Label.validNumberReq).required(Label.mobileNumberReq),
        address: Yup.string().required(Label.addressReq),
        city: Yup.string().required(Label.cityReq),
        postcode: Yup.string().required(Label.postcodeReq),
        description: Yup.string().required(Label.companyDescriptionReq),
    });

    return (
        <View style={styles.container}>
            <Header />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 25 }}>
                    <Text style={styles.instructionText}>{Label.fillYourCompanyInfo}</Text>

                    <Formik
                        initialValues={dataField}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log('Form data:', values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <Input placeholder={Label.business} value={values.business} onChange={handleChange('business')} error={touched.business && errors.business} />
                                <Input placeholder={Label.contactName} value={values.contactName} onChange={handleChange('contactName')} error={touched.contactName && errors.contactName} />
                                <Input placeholder={Label.brandName} value={values.brandName} onChange={handleChange('brandName')} error={touched.brandName && errors.brandName} />
                                <Input placeholder={Label.companyNumber} value={values.companyNumber} onChange={handleChange('companyNumber')} error={touched.companyNumber && errors.companyNumber} />
                                <Input placeholder={Label.VATnumber} value={values.vatNumber} onChange={handleChange('vatNumber')} error={touched.vatNumber && errors.vatNumber} />
                                <Input placeholder={Label.mobileNumberBusiness} value={values.mobileNumber} onChange={handleChange('mobileNumber')} keyboardType="numeric" error={touched.mobileNumber && errors.mobileNumber} />

                                <View style={styles.uploadSection}>
                                    <Text>{Label.uploadCompanyLogo}</Text>
                                    <View style={styles.logoContainer}>
                                        <View style={styles.logoBox}>
                                            {selectedImage ? (
                                                <Image source={{ uri: selectedImage }} style={styles.img} />
                                            ) : (
                                                <Image source={images.uploadCompanyLogo} resizeMode="contain" style={styles.img} />
                                            )}
                                        </View>
                                        <TouchableOpacity onPress={openImagePicker} style={styles.cameraButton}>
                                            <Image source={images.cameraIcon} style={styles.cameraIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Input placeholder={Label.address} value={values.address} onChange={handleChange('address')} error={touched.address && errors.address} />

                                <View style={styles.oneRowTwoFieldConatiner}>
                                    <View style={styles.oneRowTwoField}>
                                        <Input placeholder={Label.city} value={values.city} onChange={handleChange('city')} error={touched.city && errors.city} />
                                    </View>
                                    <View style={styles.oneRowTwoField}>
                                        <Input placeholder={Label.postCode} value={values.postcode} onChange={handleChange('postcode')} error={touched.postcode && errors.postcode} />
                                    </View>
                                </View>

                                <Input placeholder={Label.companyDescription} value={values.description} onChange={handleChange('description')} error={touched.description && errors.description} />
                                <AgreeTermsAndPolicy />
                                <Button text={Label.continue} onPress={() => {
                                    handleSubmit();
                                    navigate('TabStack', { screen: '' });
                                }}
                                    additionalStyle={styles.btnMargin}

                                />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default BusinessOnBoarding;
