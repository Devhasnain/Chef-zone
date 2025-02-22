import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width,
    height,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fonts.poppinsMedium,
    marginTop: 44,
    marginBottom: 8,
    textAlign: 'left',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  forgotText: (color = colors.color_667085) => ({
    fontSize: 12,
    fontFamily: fonts.poppinsMedium,
    fontWeight: '500',
    color: color,
    marginBottom: 8,
  }),
});

export default styles;
