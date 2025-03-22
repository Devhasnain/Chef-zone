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
  forgotPassword: {
    color: colors.primary,
    fontWeight: 'bold',
    paddingVertical: 20,
    textDecorationLine:'underline',
    fontSize:16
  },
  additionalStyle:{marginTop:20}
});
