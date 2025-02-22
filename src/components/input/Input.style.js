import {StyleSheet} from 'react-native';
import fonts from '../../config/Fonts';
import colors from '../../config/Colors';

const Styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.color_D0D5DD,
    paddingHorizontal: 10,
    backgroundColor: colors.color_F9FAFB,
  },
  containerStyle: {
    paddingHorizontal: 0,
    height: 50,
    marginBottom: 8,
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
