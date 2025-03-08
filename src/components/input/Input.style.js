import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


const Styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.accent,
    paddingHorizontal: 10,
    backgroundColor: colors.bgSecondary,
  },
  containerStyle: {
    paddingHorizontal: 0,
    height: 50,
    marginVertical: 10,
  },
  inputStyle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.accent,
    fontSize: 14,
  },
});

export default Styles;
