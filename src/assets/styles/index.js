import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const globalStyle = StyleSheet.create({
  flex: flex => ({flex: flex}),
  flexDirection: flexDirection => ({flexDirection: flexDirection}),
  justifyContent: justifyContent => ({justifyContent: justifyContent}),
  alignItems: alignItems => ({alignItems: alignItems}),
  paddingTop: paddingTop => ({paddingTop: paddingTop}),
  paddingBottom: paddingBottom => ({paddingBottom: paddingBottom}),
  paddingLeft: paddingLeft => ({paddingLeft: paddingLeft}),
  paddingRight: paddingRight => ({paddingRight: paddingRight}),
  paddingHorizontal: paddingHorizontal => ({
    paddingHorizontal: paddingHorizontal,
  }),
  paddingVertical: paddingVertical => ({
    paddingVertical: paddingVertical,
  }),
  marginVertical: marginVertical => ({
    marginVertical: marginVertical,
  }),
  marginHorizontal: marginHorizontal => ({
    marginHorizontal: marginHorizontal,
  }),
  marginTop: marginTop => ({
    marginTop: marginTop,
  }),
  marginBottom: marginBottom => ({
    marginBottom: marginBottom,
  }),
  marginLeft: marginLeft => ({
    marginLeft: marginLeft,
  }),
  borderRadius: borderRadius => ({borderRadius: borderRadius}),
  marginRight: marginRight => ({
    marginRight: marginRight,
  }),
  position: position => ({
    position: position,
  }),
  top: top => ({
    top: top,
  }),
  bottom: bottom => ({
    bottom: bottom,
  }),
  left: left => ({
    left: left,
  }),
  padding: padding => ({padding: padding}),
  right: right => ({
    right: right,
  }),
  height: height => ({height: height}),
  maxHeight: maxHeight => ({maxHeight: maxHeight}),
  minHeight: minHeight => ({minHeight: minHeight}),

  width: width => ({width: width}),
  container: {
    flex: 1,
  },
  appPHStyle: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.black,
    marginBottom: 19,
    marginTop: 45,
    fontFamily: fonts.outfitBold,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.black,
    marginVertical: 12,
    fontFamily: fonts.outfitSemiBold,
  },
  modalDesc: {
    color: colors.labelColor,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.outfitRegular,
    width: '100%',
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.textColor,
    fontFamily: fonts.outfitRegular,
  },
  emailText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.outfitRegular,
    marginTop: 3,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  backButton: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.color_2A2F3B,
  },
  screenTitle: {
    fontSize: 20,
    fontFamily: fonts.outfitSemiBold,
    color: colors.black,
  },
  avatarStyle: {
    width: 67,
    height: 67,
    borderRadius: 33.5,
    overflow: 'hidden',
  },
});
export default globalStyle;
