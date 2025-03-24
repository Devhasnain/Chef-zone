import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import fonts from '../../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.searchInputBg,
    paddingVertical: 2.5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom:10
  },
  searchInput:{flex: 1, fontSize: 17,color:colors.black, fontFamily:fonts.poppinsRegular}
});

export default styles;
