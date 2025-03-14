import { Image, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AgreeTermsAndPolicy from "../../../components/agreeTermsAndPolicy/agreeTermsAndPolicy";
import { navigate } from "../../../navigation/NavigationService";
import Header from "../../../components/header/header";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { images } from "../../../config/Images";
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
        Alert.alert(
            "Upload Photo",
            "Choose an option",
            [
                { text: "Take Photo", onPress: () => console.log("Take Photo") },
                { text: "Upload Photo", onPress: () => console.log("Upload Photo") },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };


    const validationSchema = Yup.object().shape({
        business: Yup.string().required("Business name is required"),
        contactName: Yup.string().required("Contact name is required"),
        brandName: Yup.string().required("Brand name is required"),
        companyNumber: Yup.string().required("Company number is required"),
        vatNumber: Yup.string().required("VAT number is required"),
        mobileNumber: Yup.string().matches(/^\d{10}$/, "Enter a valid mobile number").required("Mobile number is required"),
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        postcode: Yup.string().required("Postcode is required"),
        description: Yup.string().required("Company description is required"),
    });

    return (
        <View style={styles.container}>
            <Header />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.instructionText}>Please fill your company information.</Text>

                    <Formik
                        initialValues={dataField}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log('Form data:', values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <Input placeholder="Business" onChange={handleChange('business')} onBlur={handleBlur('business')} value={values.business} />
                                {touched.business && errors.business && <Text style={styles.error}>{errors.business}</Text>}

                                <Input placeholder="Contact name" onChange={handleChange('contactName')} onBlur={handleBlur('contactName')} value={values.contactName} />
                                {touched.contactName && errors.contactName && <Text style={styles.error}>{errors.contactName}</Text>}

                                <Input placeholder="Brand name" onChange={handleChange('brandName')} onBlur={handleBlur('brandName')} value={values.brandName} />
                                {touched.brandName && errors.brandName && <Text style={styles.error}>{errors.brandName}</Text>}

                                <Input placeholder="Company number" onChange={handleChange('companyNumber')} onBlur={handleBlur('companyNumber')} value={values.companyNumber} />
                                {touched.companyNumber && errors.companyNumber && <Text style={styles.error}>{errors.companyNumber}</Text>}

                                <Input placeholder="VAT number" onChange={handleChange('vatNumber')} onBlur={handleBlur('vatNumber')} value={values.vatNumber} />
                                {touched.vatNumber && errors.vatNumber && <Text style={styles.error}>{errors.vatNumber}</Text>}

                                <Input placeholder="Mobile number" onChange={handleChange('mobileNumber')} onBlur={handleBlur('mobileNumber')} value={values.mobileNumber} keyboardType="numeric" />
                                {touched.mobileNumber && errors.mobileNumber && <Text style={styles.error}>{errors.mobileNumber}</Text>}

                                <View style={styles.uploadSection}>
                                    <Text>Upload Company Logo</Text>
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

                                <Input placeholder="Address" onChange={handleChange('address')} onBlur={handleBlur('address')} value={values.address} />
                                {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={styles.oneRowTwoField}>
                                        <Input placeholder="City" onChange={handleChange('city')} onBlur={handleBlur('city')} value={values.city} />
                                        {touched.city && errors.city && <Text style={styles.error}>{errors.city}</Text>}
                                    </View>
                                    <View style={styles.oneRowTwoField}>
                                        <Input placeholder="Postcode" onChange={handleChange('postcode')} onBlur={handleBlur('postcode')} value={values.postcode} />
                                        {touched.postcode && errors.postcode && <Text style={styles.error}>{errors.postcode}</Text>}
                                    </View>
                                </View>

                                <Input placeholder="Company description" onChange={handleChange('description')} onBlur={handleBlur('description')} value={values.description} />
                                {touched.description && errors.description && <Text style={styles.error}>{errors.description}</Text>}
                                <AgreeTermsAndPolicy />
                                <Button text="Continue" onPress={handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default BusinessOnBoarding;
