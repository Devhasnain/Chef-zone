import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 3,
    marginTop: 14,
  },
  textStyle: (color = colors.black) => ({
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    fontWeight: '500',
    color: color,
  }),
});
export default Styles;
