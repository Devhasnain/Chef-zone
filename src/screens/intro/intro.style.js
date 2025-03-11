import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

import colors from '../../config/Colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
    position: 'relative',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50,
  },
  paginateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginate: {
    width: 15,
    height: 10,
    marginHorizontal: 5,
    backgroundColor: colors.accentLight,
    borderRadius: 20,
  },
  activePaginate: {
    width: 30,
    backgroundColor: colors.primary,
  },
  skipNextButton: {
    width: 70,
    backgroundColor: 'transparent',
  },
});
