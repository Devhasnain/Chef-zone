import {StyleSheet} from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: fonts.poppinsRegular,
    alignItems: 'center',
    backgroundColor: colors.bgSecondary,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 80,
  },
  logo: {
    width: 120,
    height: 120,
  },
  welcomeText: {
    fontSize: 20,
    color: colors.accentLight,
    paddingBottom: 15,
    fontFamily: fonts.poppinsRegular,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 40,
  },
  additionalTestStyle: {
    // color:
    //   button.screen === 'BrowserJob' ? colors.secondary : colors.accentLight,
  },
  additionalStyle: {
    marginBottom: 15,
    // backgroundColor:
    //   button.screen === 'BrowserJob' ? colors.bgPrimary : colors.bgSecondary,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
