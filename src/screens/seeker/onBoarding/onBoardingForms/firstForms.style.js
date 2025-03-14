import { StyleSheet } from 'react-native';

import colors from '../../../../config/Colors';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  instructionText: {
    paddingVertical: 5
  },
  uploadSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    position: "relative",
    alignSelf: "flex-end"
  },
  logoBox: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: "100%",
  },
  cameraButton: {
    position: "absolute",
    top: 40,
    left: -18,
    padding: 5,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    borderWidth: 1
  },
  cameraIcon: {
    width: 25,
    height: 25
  },
  label:{
    paddingLeft:5
  }
});
