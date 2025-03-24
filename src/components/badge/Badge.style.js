import {StyleSheet} from 'react-native';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
 container:{
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 100,
    borderWidth:1,
    borderColor:"#ccc"
  },
  badgeText:{
    fontFamily:fonts.montserratRegular
  }
});

export default styles;
