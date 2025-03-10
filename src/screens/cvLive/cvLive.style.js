import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  subContainer: {
    padding: 20,
  },
  logo: {
    width: "70%",
    resizeMode: 'contain',
  },
  cvUpload:{
    marginVertical:10
  },
  errorText:{
    color:"red",
    paddingBottom:5
  }

});

export default Styles;