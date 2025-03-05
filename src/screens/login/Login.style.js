import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';


export default StyleSheet.create({
  logo: {
    width: "100%",
    resizeMode: 'contain',
    marginTop: 20
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  signInText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  forgotPassword: {
    color: colors.orange,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
});
