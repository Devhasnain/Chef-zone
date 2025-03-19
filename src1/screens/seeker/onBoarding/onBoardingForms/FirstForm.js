import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View, Alert, Image, } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { memo, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { firstFormStyle as styles } from './allForm.style';
import Button from '../../../../components/button/Button';
import Title from '../../../../components/title/Title';
import Input from '../../../../components/input/Input';
import { images } from '../../../../config/Images';
import Label from '../../../../config/Label';


const FirstForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setIndex] = useState(0);
  const entities = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postcode: '',
    nationalInsurance: '',
    mobileNumber: '',
  };

  const openImagePicker = () => {
    Alert.alert(Label.uploadPhoto, Label.chooseOption, [
      { text: Label.takePhoto, onPress: () => console.log(Label.takePhoto) },
      { text: Label.uploadPhoto, onPress: () => console.log(Label.uploadPhoto) },
      { text: Label.cancel, style: 'cancel' },
    ]);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(Label.firstNameSeekerOBReq),
    lastName: Yup.string().required(Label.lastNameSeekerOBReq),
    dateOfBirth: Yup.string().required(Label.dateOfBirthSeekerOBReq),
    address: Yup.string().required(Label.addressSeekerOBReq),
    city: Yup.string().required(Label.citySeekerOBReq),
    postcode: Yup.string().required(Label.postCodeSeekerOBReq),
    nationalInsurance: Yup.string().required(
      Label.nationalInsurSeekerOBReq,
    ),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, Label.validNumberSeekerOBReq)
      .required(Label.mobileNumberSeekerOBReq),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Title heading={Label.employeeDetailsSeekerOBReq} />
        <Formik
          initialValues={entities}
          validationSchema={validationSchema}
          onSubmit={values => console.log('Form data:', values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Input
                placeholder={Label.firstNameSeeker}
                value={values.firstName}
                onChange={handleChange('firstName')}
                error={touched.firstName && errors.firstName}
              />
              <Input
                placeholder={Label.lastNameSeeker}
                value={values.lastName}
                onChange={handleChange('lastName')}
                error={touched.lastName && errors.lastName}
              />
              <Input
                placeholder={Label.dobSeeker}
                value={values.dateOfBirth}
                onChange={handleChange('dateOfBirth')}
                error={touched.dateOfBirth && errors.dateOfBirth}
              />
              <Input
                placeholder={Label.addressSeeker}
                value={values.address}
                onChange={handleChange('address')}
                error={touched.address && errors.address}
              />
              <View style={styles.oneRowTwoFieldConatiner}>
                <View style={styles.oneRowTwoField}>
                  <Input
                    placeholder={Label.citySeeker}
                    value={values.city}
                    onChange={handleChange('city')}
                    error={touched.city && errors.city}
                  />
                </View>
                <View style={styles.oneRowTwoField}>
                  <Input
                    placeholder={Label.postCodeSeeker}
                    value={values.postcode}
                    onChange={handleChange('postcode')}
                    error={touched.postcode && errors.postcode}
                  />
                </View>
              </View>
              <Input
                placeholder={Label.nationalInsurSeeker}
                value={values.nationalInsurance}
                onChange={handleChange('nationalInsurance')}
                error={touched.nationalInsurance && errors.nationalInsurance}
              />
              <Input
                placeholder={Label.mobileNumberSeeker}
                value={values.mobileNumber}
                onChange={handleChange('mobileNumber')}
                error={touched.mobileNumber && errors.mobileNumber}
              />

              {/* Radio Button Section with RNEUI */}
              <Text style={styles.label}>
                {Label.DoYouCurrentlyHaveAnyJobs}
              </Text>
              <View style={styles.checkContainer}>
                <CheckBox
                  title={Label.Yes}
                  checked={selectedIndex === 0}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.checkBoxIcon}
                  textStyle={styles.checkBoxIconText}
                />
                <CheckBox
                  title={Label.No}
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.checkBoxIcon}
                  textStyle={styles.checkBoxIcon}
                />
              </View>

              {/* Upload Logo Section */}
              <View style={styles.uploadSection}>
                <Text>{Label.uploadCompanyLogo}</Text>
                <View style={styles.logoContainer}>
                  <View style={styles.logoBox}>
                    {selectedImage ? (
                      <Image
                        source={{ uri: selectedImage }}
                        style={styles.img}
                      />
                    ) : (
                      <Image
                        source={images.uploadCompanyLogo}
                        resizeMode="contain"
                        style={styles.img}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={openImagePicker}
                    style={styles.cameraButton}>
                    <Image
                      source={images.cameraIcon}
                      style={styles.cameraIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Button onPress={handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(FirstForm);
