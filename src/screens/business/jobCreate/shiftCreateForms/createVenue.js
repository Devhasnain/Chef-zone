import { Image, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { navigate } from "../../../../navigation/NavigationService";
import { createVenueStyles as styles } from './allJobForm.style';
import Header from "../../../../components/header/Header";
import Button from "../../../../components/button/Button";
import Title from "../../../../components/title/Title";
import Input from "../../../../components/input/Input";
import { images } from "../../../../config/Images";
import Label from "../../../../config/Label";


const CreateVenue = () => {
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
    business: Yup.string().required(Label.businessNameReq),
    contactName: Yup.string().required(Label.contactName),
    brandName: Yup.string().required(Label.brandNameReq),
    companyNumber: Yup.string().required(Label.companyNumberReq),
    vatNumber: Yup.string().required(Label.VATNumberReq),
    mobileNumber: Yup.string().matches(/^\d{10}$/, Label.validNumberReq).required(Label.mobileNumberReq),
    address: Yup.string().required(Label.addressReq),
    city: Yup.string().required(Label.cityReq),
    postcode: Yup.string().required(Label.postcodeReq),
    description: Yup.string().required(Label.companyDescriptionReq),
  });
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title heading={Label.createVenue}/>
          <Formik
            initialValues={dataField}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log('Form data:', values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Input placeholder={Label.name} value={values.business} onChange={handleChange('business')} error={touched.business && errors.business} />
                <Input placeholder={Label.address} value={values.address} onChange={handleChange('address')} error={touched.address && errors.address} />
                <View style={styles.oneRowTwoFieldConatiner}>
                  <View style={styles.oneRowTwoField}>
                    <Input placeholder={Label.city} value={values.city} onChange={handleChange('city')} error={touched.city && errors.city} />
                  </View>
                  <View style={styles.oneRowTwoField}>
                    <Input placeholder={Label.postCode} value={values.postcode} onChange={handleChange('postcode')} error={touched.postcode && errors.postcode} />
                  </View>
                </View>
                <Input placeholder={Label.accessInst} value={values.description} onChange={handleChange('description')} error={touched.description && errors.description} />
                <Input placeholder={Label.setLocation} value={values.description} onChange={handleChange('description')} error={touched.description && errors.description} />
                <Input placeholder={Label.areas} value={values.description} onChange={handleChange('description')} error={touched.description && errors.description} />
                <Button text={Label.createVenue} additionalStyle={styles.createVenueBtn}/>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default CreateVenue;