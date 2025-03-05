import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: fonts.poppinsRegular,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: "100%",
    marginTop: 20,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 30,
    color: colors.orange,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.orange,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
