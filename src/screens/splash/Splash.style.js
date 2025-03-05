import { Dimensions, StyleSheet } from 'react-native';


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
  },
});

export default styles;
