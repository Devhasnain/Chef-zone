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
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  signUpText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
