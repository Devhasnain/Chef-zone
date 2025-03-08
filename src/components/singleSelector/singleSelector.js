import { Dropdown } from 'react-native-element-dropdown';
import { View, Text } from 'react-native';
import React from 'react';


const data = [
  { label: 'Pakistan', value: 'PK' },
  { label: 'India', value: 'IN' },
  { label: 'USA', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'Germany', value: 'DE' },
];


const SingleSelect = ({ value, onChange }) => {
  return (
    <View>
      <Dropdown
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        placeholderStyle={{ color: '#aaa' }}
        selectedTextStyle={{ color: '#000' }}
        search
        searchPlaceholder="Search..."
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default SingleSelect;
