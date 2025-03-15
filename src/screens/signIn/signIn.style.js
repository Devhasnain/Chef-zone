import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  logo: {
    width: "100%",
    resizeMode: 'contain',
    paddingnTop: 20,
  },
  errorText: {
    color: 'red',
    paddingnBottom: 10,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  forgotPassword: {
    color: colors.accent,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
