import { View } from 'react-native';
// import { Image, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
// import { ScrollView } from "react-native";
// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import AgreeTermsAndPolicy from "../../../components/agreeTermsAndPolicy/agreeTermsAndPolicy";
// import { navigate } from "../../../navigation/NavigationService";
// import Header from "../../../components/header/header";
// import Button from "../../../components/button/Button";
// import Input from "../../../components/input/Input";
// import { images } from "../../../config/Images";
// import styles from "./onBoarding.style";
// const CreateVenue = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const dataField = {
//         business: '',
//         contactName: '',
//         brandName: '',
//         companyNumber: '',
//         vatNumber: '',
//         mobileNumber: '',
//         address: '',
//         city: '',
//         postcode: '',
//         description: ''
//     }
//     const handleNavigate = (screen) => {
//         if (screen === 'BusinessOnBoarding' || screen === 'SignIn') {
//             navigate('AuthStack', { screen: screen });
//         }
//         else {
//             navigate(screen);
//         };
//     }
//     const openImagePicker = () => {
//         Alert.alert(
//             "Upload Photo",
//             "Choose an option",
//             [
//                 { text: "Take Photo", onPress: () => console.log("Take Photo") },
//                 { text: "Upload Photo", onPress: () => console.log("Upload Photo") },
//                 { text: "Cancel", style: "cancel" }
//             ]
//         );
//     };
//     const validationSchema = Yup.object().shape({
//         business: Yup.string().required("Business name is required"),
//         contactName: Yup.string().required("Contact name is required"),
//         brandName: Yup.string().required("Brand name is required"),
//         companyNumber: Yup.string().required("Company number is required"),
//         vatNumber: Yup.string().required("VAT number is required"),
//         mobileNumber: Yup.string().matches(/^\d{10}$/, "Enter a valid mobile number").required("Mobile number is required"),
//         address: Yup.string().required("Address is required"),
//         city: Yup.string().required("City is required"),
//         postcode: Yup.string().required("Postcode is required"),
//         description: Yup.string().required("Company description is required"),
//     });
//     return (
//         <View style={styles.container}>
//             <Header />
//             <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer}>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <Text style={styles.instructionText}>Please fill your company information.</Text>
//                     <Formik
//                         initialValues={dataField}
//                         validationSchema={validationSchema}
//                         onSubmit={(values) => console.log('Form data:', values)}
//                     >
//                         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//                             <View>
//                                 <Input placeholder="Business" value={values.business} onChange={handleChange('business')} error={touched.business && errors.business} />
//                                 <Input placeholder="Contact name" value={values.contactName} onChange={handleChange('contactName')} error={touched.contactName && errors.contactName} />
//                                 <Input placeholder="Brand name" value={values.brandName} onChange={handleChange('brandName')} error={touched.brandName && errors.brandName} />
//                                 <Input placeholder="Company number" value={values.companyNumber} onChange={handleChange('companyNumber')} error={touched.companyNumber && errors.companyNumber} />
//                                 <Input placeholder="VAT number" value={values.vatNumber} onChange={handleChange('vatNumber')} error={touched.vatNumber && errors.vatNumber} />
//                                 <Input placeholder="Mobile number" value={values.mobileNumber} onChange={handleChange('mobileNumber')} keyboardType="numeric" error={touched.mobileNumber && errors.mobileNumber} />
//                                 <View style={styles.uploadSection}>
//                                     <Text>Upload Company Logo</Text>
//                                     <View style={styles.logoContainer}>
//                                         <View style={styles.logoBox}>
//                                             {selectedImage ? (
//                                                 <Image source={{ uri: selectedImage }} style={styles.img} />
//                                             ) : (
//                                                 <Image source={images.uploadCompanyLogo} resizeMode="contain" style={styles.img} />
//                                             )}
//                                         </View>
//                                         <TouchableOpacity onPress={openImagePicker} style={styles.cameraButton}>
//                                             <Image source={images.cameraIcon} style={styles.cameraIcon} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                                 <Input placeholder="Address" value={values.address} onChange={handleChange('address')} error={touched.address && errors.address} />
//                                 <View style={styles.oneRowTwoFieldConatiner}>
//                                     <View style={styles.oneRowTwoField}>
//                                         <Input placeholder="City" value={values.city} onChange={handleChange('city')} error={touched.city && errors.city} />
//                                     </View>
//                                     <View style={styles.oneRowTwoField}>
//                                         <Input placeholder="Postcode" value={values.postcode} onChange={handleChange('postcode')} error={touched.postcode && errors.postcode} />
//                                     </View>
//                                 </View>
//                                 <Input placeholder="Company description" value={values.description} onChange={handleChange('description')} error={touched.description && errors.description} />
//                                 <AgreeTermsAndPolicy />
//                                 <Button text="Continue" onPress={() => {
//                                     handleSubmit();
//                                     navigate('TabStack', { screen: '' });
//                                 }} />
//                             </View>
//                         )}
//                     </Formik>
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </View>
//     );
// };
// export default CreateVenue;
import React from 'react';


function createVenue() {
  return (
    <View>createVenue</View>
  )
}

export default createVenue