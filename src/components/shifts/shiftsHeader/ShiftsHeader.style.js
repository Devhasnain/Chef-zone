import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: 60,
  },
  textContainer: {display: 'flex', flexDirection: 'column', gap: 5},
  welcomeText: {fontSize: 16},
  userNameTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userNameText: {fontSize: 26, fontWeight: '700'},
  helloHand: {width: 30, aspectRatio: 1},
  profileImgBg: {
    height: 55,
    width: 55,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 25,
  },
  profileImgContentContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImgDot: {
    position: 'absolute',
    top: -6,
    right: -1.1,
  },
  profileImg: {width: "65%", height: "65%", alignSelf: 'flex-end'},
});

export default styles;
