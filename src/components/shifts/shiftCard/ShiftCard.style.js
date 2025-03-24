import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../../config/Fonts';
import colors from '../../../config/Colors';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    width: width - 32,
    borderWidth: 1,
    borderColor: 'white',
    padding: 24,
    flexDirection: 'column',
    gap: 16,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageTitleContainer: {
    flexDirection: 'row',
    gap: 18,
  },
  imageContainer: {
    width: 65,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardCompanyImage: {width: '100%', height: '100%'},
  titleContainer: {
    flexDirection: 'column',
    gap: 3,
    width: '65%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fonts.montserratSemibold,
  },
  cardDescription: {fontWeight: '400', fontFamily: fonts.poppinsRegular},
  badgeDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: fonts.poppinsRegular,
  },
  datePriceContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  priceHoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  priceText: {fontWeight: '700', fontSize: 16, fontFamily: fonts.poppinsBold},
  hoursText: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
  },
});

export default styles;
