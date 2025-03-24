import {StyleSheet} from 'react-native';
import fonts from '../../../config/Fonts';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
  },
  imageContainer: {width: 26, height: 26},
  image: {width: '100%', height: '100%'},
  tabLable: {fontFamily: fonts.poppinsMedium, fontSize: 16, fontWeight: '600'},
});

export default styles;
