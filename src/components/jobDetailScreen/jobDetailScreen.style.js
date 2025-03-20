import { StyleSheet } from "react-native";

import colors from "../../config/Colors";
import fonts from "../../config/Fonts";


// Styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.bgSecondary,
      paddingHorizontal: 20,
      fontFamily:fonts.poppinsRegular
    },
    titleContainer: {
      padding: 10,
    },
    eventTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    eventImage:{
      width:"50%"
    },
    stars: {
      fontSize: 16,
      color: "#FFD700",
    },
    jobCard: {
      backgroundColor: colors.primaryLight,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: colors.primary,
      marginBottom: 20,
    },
    jobCardItem:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    jobTitle: {
      fontSize: 30,
      fontWeight: "500",
    },
    jobSubText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.accentLight,
    },
    jobSubTextApprox:{
      fontSize: 14,
      color: colors.accentLight,
    },
    salaryContainer: {
      alignItems:"flex-end"
    },
    salaryText: {
      fontSize: 13,
      fontWeight: "bold",
    },
    approxSalary: {
      fontSize: 13,
      fontWeight: "600",
    },
    shiftItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 5,
    },
    shiftText: {
      fontSize: 16,
    },
    locationText: {
      fontSize: 16,
    },
    warningCard: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: colors.primary,
      marginVertical: 20,
    },
    warningText: {
      fontSize: 14,
      textAlign: "center",
      color: colors.accentLight,
    },
    jobDetailContainer:{
      paddingVertical:8
    },
    jobDetailHeading:{
      fontSize:16,
      fontWeight:"bold"
    },
    jobDetailPara:{
      fontSize:14,
      paddingVertical:5
    },
    benefitsContainer:{
      flexDirection:"row",
      alignItems:"center"
    },
    benefitsText:{
      margin:5,
      fontSize:14,
    },
  });

  export default styles