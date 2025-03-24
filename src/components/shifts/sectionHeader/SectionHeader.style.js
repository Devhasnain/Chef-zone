import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import fonts from '../../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title:{fontSize:18,fontWeight:"700",fontFamily:fonts.montserratBold},
  btnText:{color:colors.inputPlaceHolder_2,fontFamily:fonts.montserratSemibold}
});

export default styles;
