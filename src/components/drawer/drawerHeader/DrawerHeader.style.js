import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import fonts from '../../../config/Fonts';
const styles = StyleSheet.create({
  headerMainContainer: {display: 'flex', flexDirection: 'row', gap: 8},
  headerAlertContainer: {
    backgroundColor: colors.color_FFCFD5,
    borderRadius: 16,
    flex: 1,
  },
  headerAlert: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  headerAlertText: {
    color: colors.red,
    fontSize: 12,
    fontFamily: fonts.montserratMedium,
    fontWeight:"600"
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: colors.tab_bar_active_color,
    borderRadius: 16,
    paddingHorizontal: 30,
    minHeight: 140,
    borderBottomRightRadius: 45,
    position: 'relative',
  },
  headerImageContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  headerImage: {width: '100%', height: '100%'},
  headerTextContainer: {display: 'flex', flexDirection: 'column', gap: 6},
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    fontFamily: fonts.poppinsBold,
  },
  reviewsOuterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  reviewsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textWhite: {
    color: colors.white,
    fontFamily: fonts.montserratRegular,
    fontSize:15
  },
  editBtnContainer: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtn: {
    height: 33,
    width: 33,
    backgroundColor: colors.inputPlaceHolder_2,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
