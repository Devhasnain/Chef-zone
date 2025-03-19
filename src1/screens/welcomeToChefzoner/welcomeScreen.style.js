import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: fonts.poppinsRegular,
    alignItems: 'center',
    backgroundColor: colors.bgPrimary,
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
    color: colors.secondary,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
