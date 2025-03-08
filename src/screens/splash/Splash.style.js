import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../config/Colors';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width: 230,
    height: 230,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary
  },
});

export default styles;
