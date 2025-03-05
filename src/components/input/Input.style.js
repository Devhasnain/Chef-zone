import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


const Styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.color_D0D5DD,
    paddingHorizontal: 10,
    backgroundColor: colors.color_F9FAFB,
  },
  containerStyle: {
    paddingHorizontal: 0,
    height: 50,
    marginVertical: 10,
  },
  inputStyle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.color_2A2F3B,
    fontSize: 14,
  },
  labelStyle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.labelColor,
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Styles;
