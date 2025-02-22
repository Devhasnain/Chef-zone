import {StyleSheet} from 'react-native';
import fonts from '../../config/Fonts';
import colors from '../../config/Colors';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 3,
    marginTop: 14,
  },
  textStyle: (color = colors.color_667085) => ({
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    fontWeight: '500',
    color: color,
  }),
});
export default Styles;
