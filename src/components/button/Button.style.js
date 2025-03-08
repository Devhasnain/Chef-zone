import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


const Styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    minHeight: 48,
    borderRadius: 15,
    backgroundColor: colors.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
    color: colors.secondary,
    textAlign: 'center',
  },
});

export default Styles;
