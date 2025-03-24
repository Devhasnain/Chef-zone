import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width,
    height,
  },
  container: {
    flex: 1,
    height: height,
  },
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingVertical: 20,
  },
  animatedBgBox: {
    height: '70%',
    width: '55%',
    position: 'absolute',
    bottom: -40,
    right: -50,
    borderTopLeftRadius: 24,
  },
});

export default styles;
