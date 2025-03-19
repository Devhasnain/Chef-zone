import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SingleSelect from '../../components/singleSelector/SingleSelector';
import MultiSelect from '../../components/multiSelector/MultiSelector';
import { salaryData } from '../../constants/constant';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import Styles from './cvLive.style';


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(Label.firstNameCVReq),
  lastName: Yup.string().required(Label.lastNameCVReq),
  email: Yup.string().email(Label.invalidEmail).required(Label.emailCVReq),
  mobileNumber: Yup.string().required(Label.mobileNumberCVReq),
  address: Yup.string().required(Label.addressCVReq),
  city: Yup.string().required(Label.cityCVReq),
  postCode: Yup.string().required(Label.postCodeCVReq),
  totalExperience: Yup.string().required(Label.totalExperienceCVReq),
  currentSalary: Yup.string().required(Label.currentSalaryCVReq),
  preferredSalary: Yup.string().required(Label.preferredSalaryCVReq),
  preferredLocations: Yup.array().min(1, Label.preferredLocationsCVReq),
  selectedRoles: Yup.array().min(1, Label.selectedRolesCVReq),
  jobType: Yup.array().min(1, Label.jobTypeCVReq),
  cvFile: Yup.mixed().required(Label.cvFileCVReq),
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={Styles.subContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 25 }}>
          <View>
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
              onSubmit={values => {
                console.log('Form Data:', values);
              }}>
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <>
                  <Input
                    placeholder={Label.firstNameCV}
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    error={touched.firstName && errors.firstName}
                  />
                  <Input
                    placeholder={Label.lastNameCV}
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    error={touched.lastName && errors.lastName}
                  />
                  <Input
                    placeholder={Label.emailCV}
                    value={values.email}
                    onChange={handleChange('email')}
                    error={touched.email && errors.email}
                    keyboardType="email-address"
                  />
                  <Input
                    placeholder={Label.mobileNumberCV}
                    value={values.mobileNumber}
                    onChange={handleChange('mobileNumber')}
                    error={touched.mobileNumber && errors.mobileNumber}
                    keyboardType="phone-pad"
                  />
                  <Input
                    placeholder={Label.addressCV}
                    value={values.address}
                    onChange={handleChange('address')}
                    error={touched.address && errors.address}
                  />
                  <Input
                    placeholder={Label.cityCV}
                    value={values.city}
                    onChange={handleChange('city')}
                    error={touched.city && errors.city}
                  />
                  <Input
                    placeholder={Label.postCodeCV}
                    value={values.postCode}
                    onChange={handleChange('postCode')}
                    error={touched.postCode && errors.postCode}
                  />
                  <Input
                    placeholder={Label.totalExperienceCV}
                    value={values.totalExperience}
                    onChange={handleChange('totalExperience')}
                    error={touched.totalExperience && errors.totalExperience}
                    keyboardType="numeric"
                  />
                  <SingleSelect
                    placeholder={Label.currentSalaryCV}
                    data={salaryData}
                  />
                  <SingleSelect
                    placeholder={Label.preferredSalaryCV}
                    data={salaryData}
                  />
                  <MultiSelect placeholder={Label.preferredLocationsCV} />
                  <MultiSelect placeholder={Label.selectedRolesCV} />
                  <MultiSelect placeholder={Label.jobTypeCV} />

                  {/* CV Upload Button */}
                  <Button
                    additionalStyle={Styles.btnStyle}
                    text={cvFile ? Label.cvUploaded : Label.cvFileCV}
                    onPress={() => handleSubmit()}
                  />

                  {errors.cvFile && touched.cvFile && (
                    <Text style={Styles.errorText}>{errors.cvFile}</Text>
                  )}

                  {/* Submit Button */}
                  <Button
                    text={Label.cvButtonText}
                    onPress={() => handleSubmit()}
                  />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CVLive;
