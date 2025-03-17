import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import {CheckBox} from '@rneui/themed';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {firstFormStyle as styles} from './allForm.style';
import Button from '../../../../components/button/Button';
import Title from '../../../../components/title/title';
import Input from '../../../../components/input/Input';
import {images} from '../../../../config/Images';
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
    Alert.alert('Upload Photo', 'Choose an option', [
      {text: 'Take Photo', onPress: () => console.log('Take Photo')},
      {text: 'Upload Photo', onPress: () => console.log('Upload Photo')},
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postcode: Yup.string().required('Postcode is required'),
    nationalInsurance: Yup.string().required(
      'National Insurance No is required',
    ),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, 'Enter a valid mobile number')
      .required('Mobile number is required'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View>
          <Title heading={'Employee details'} />
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
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  error={touched.firstName && errors.firstName}
                />
                <Input
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  error={touched.lastName && errors.lastName}
                />
                <Input
                  placeholder="Date of birth"
                  value={values.dateOfBirth}
                  onChange={handleChange('dateOfBirth')}
                  error={touched.dateOfBirth && errors.dateOfBirth}
                />
                <Input
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange('address')}
                  error={touched.address && errors.address}
                />
                <View style={styles.oneRowTwoFieldConatiner}>
                  <View style={styles.oneRowTwoField}>
                    <Input
                      placeholder="City"
                      value={values.city}
                      onChange={handleChange('city')}
                      error={touched.city && errors.city}
                    />
                  </View>
                  <View style={styles.oneRowTwoField}>
                    <Input
                      placeholder="Postcode"
                      value={values.postcode}
                      onChange={handleChange('postcode')}
                      error={touched.postcode && errors.postcode}
                    />
                  </View>
                </View>
                <Input
                  placeholder="National Insurance No"
                  value={values.nationalInsurance}
                  onChange={handleChange('nationalInsurance')}
                  error={touched.nationalInsurance && errors.nationalInsurance}
                />
                <Input
                  placeholder="Mobile number"
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
                    title="Yes"
                    checked={selectedIndex === 0}
                    onPress={() => setIndex(0)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.checkBoxIcon}
                    textStyle={styles.checkBoxIconText}
                  />
                  <CheckBox
                    title="No"
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
                          source={{uri: selectedImage}}
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FirstForm;
