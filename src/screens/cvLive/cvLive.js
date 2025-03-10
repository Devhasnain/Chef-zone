import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SingleSelect from '../../components/singleSelector/singleSelector';
import MultiSelect from '../../components/multiSelector/multiSelector';
import Header from '../../components/header/header';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import Styles from './cvLive.style';
import { data } from '../../constants/constant';
import Button from '../../components/button/Button';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postCode: Yup.string().required('Post code is required'),
  totalExperience: Yup.string().required('Experience is required'),
  currentSalary: Yup.string().required('Current salary is required'),
  preferredSalary: Yup.string().required('Preferred salary is required'),
  preferredLocations: Yup.array().min(1, 'At least one location is required'),
  selectedRoles: Yup.array().min(1, 'At least one role is required'),
  jobType: Yup.array().min(1, 'At least one job type is required'),
  cvFile: Yup.mixed().required('CV is required'),
});

const CVLive = () => {
  const [cvFile, setCvFile] = useState(null);

  // const pickCV = async (setFieldValue) => {
  //   try {
  //     const result = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
  //     });
  //     setCvFile(result);
  //     setFieldValue('cvFile', result);
  //   } catch (error) {
  //     if (DocumentPicker.isCancel(error)) {
  //       console.log('User cancelled document picker');
  //     } else {
  //       console.log('Document picker error:', error);
  //     }
  //   }
  // };

  return (
    <View style={Styles.container}>
      <Header image={images.cvLiveLogo} style={Styles.logo} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.subContainer}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              mobileNumber: '',
              address: '',
              city: '',
              postCode: '',
              totalExperience: '',
              currentSalary: '',
              preferredSalary: '',
              preferredLocations: [],
              selectedRoles: [],
              jobType: [],
              cvFile: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Form Data:', values);
            }}
          >
            {({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => (
              <>
                <Input
                  placeholder={Label.firstName}
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  error={touched.firstName && errors.firstName}
                />
                <Input
                  placeholder={Label.lastName}
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  error={touched.lastName && errors.lastName}
                />
                <Input
                  placeholder={Label.email}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email}
                />
                <Input
                  placeholder={Label.mobileNumber}
                  value={values.mobileNumber}
                  onChangeText={handleChange('mobileNumber')}
                  error={touched.mobileNumber && errors.mobileNumber}
                />
                <Input
                  placeholder={Label.address}
                  value={values.address}
                  onChangeText={handleChange('address')}
                  error={touched.address && errors.address}
                />
                <Input
                  placeholder={Label.city}
                  value={values.city}
                  onChangeText={handleChange('city')}
                  error={touched.city && errors.city}
                />
                <Input
                  placeholder={Label.postCode}
                  value={values.postCode}
                  onChangeText={handleChange('postCode')}
                  error={touched.postCode && errors.postCode}
                />
                <Input
                  placeholder={Label.totalExperience}
                  value={values.totalExperience}
                  onChangeText={handleChange('totalExperience')}
                  error={touched.totalExperience && errors.totalExperience}
                />
                <SingleSelect
                  placeholder="Current Salary"
                />
                <SingleSelect
                  placeholder="Preferred Salary"
                />
                <MultiSelect
                  placeholder="Preferred location"
                />
                <MultiSelect
                  placeholder="Select roles"
                />
                <MultiSelect
                  placeholder="Job type"
                />
                
                {/* CV Upload Button */}
                <Button additionalStyle={{marginVertical:10}} text={cvFile ? 'CV Uploaded' : 'Upload CV'} onPress={() => handleSubmit()}/>

                {errors.cvFile && touched.cvFile && <Text style={Styles.errorText}>{errors.cvFile}</Text>}

                {/* Submit Button */}
                <Button text={Label.cvButtonText} onPress={() => handleSubmit()}/>
                
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default CVLive;
