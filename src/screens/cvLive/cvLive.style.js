import {StyleSheet} from 'react-native';

import colors from '../../config/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  subContainer: {
    padding: 20,
    flex: 1,
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
    backgroundColor: 'yellow',
  },
  cvUpload: {
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    paddingBottom: 5,
  },
  btnStyle: {
    marginVertical: 10,
  },
});

export default Styles;
