import {StyleSheet} from 'react-native';

import colors from '../../config/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    // paddingTop: 20
    backgroundColor: 'red',
  },
  errorText: {
    color: 'red',
    paddingBottom: 10,
  },
  container: {
    paddingHorizontal: 20,
  },
});
