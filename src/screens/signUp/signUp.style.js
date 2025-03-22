import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';


export default StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 20,
  },
  errorText: {
    color: 'red',
    paddingnBottom: 10,
  },
  container: {
    paddingHorizontal: 20,
  },
  btnadditionalStyle:{ width: '100%', marginTop: 20 }
});
