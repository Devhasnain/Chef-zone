import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';

import SingleSelect from '../../components/singleSelector/singleSelector';
import { keyboardTypes } from '../../constants/KeyboardTypes.constants';
import MultiSelect from '../../components/multiSelector/multiSelector';
import Header from '../../components/header/header';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import Label from '../../config/Label';
import Styles from './cvLive.style';


const data = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const CVLive = () => {
  const [firstName, setFirstName] = useState('');
  const [selectedSingle, setSelectedSingle] = useState(null);
  const [selectedMulti, setSelectedMulti] = useState([]);
  return (
    <View style={Styles.container}>
      <Header image={images.cvLiveLogo} style={Styles.logo} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.subContainer}>
          <Input
            placeholder={Label.firstName}
            keyboardType={keyboardTypes.emailAddress}
            value={firstName}
            onChange={(e) => setFirstName(e)}
          />
          <SingleSelect
            label="Select One"
            value={selectedSingle}
            onChange={item => setSelectedSingle(item.value)}
          />

          <MultiSelect
            label="Select Multiple"
            value={selectedMulti}
            onChange={item => setSelectedMulti(item)}
          />
          <Input
            placeholder={Label.lastName}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.email}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.mobileNumber}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.address}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.city}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.postCode}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
          <Input
            placeholder={Label.totalExperience}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // onBlur={handleBlur('email')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CVLive;