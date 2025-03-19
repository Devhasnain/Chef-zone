import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';


const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingBottom: 0,
  },
  backText: {
    color: colors.accent,
    fontSize: 16,
    paddingLeft: 10,
  },
  title: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Styles;
