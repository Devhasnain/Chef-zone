import { StyleSheet } from "react-native";
import colors from "../../config/Colors";

// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
      paddingHorizontal: 10,
      // paddingTop: 40,
    },
    titleContainer: {
      padding: 10,
    },
    eventTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    stars: {
      fontSize: 16,
      color: "#FFD700",
    },
    jobCard: {
      backgroundColor: "#FCE9D4",
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#F4A261",
      marginBottom: 20,
    },
    jobTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    jobSubText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#666",
    },
    salaryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
    },
    salaryText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    approxSalary: {
      fontSize: 16,
      fontWeight: "600",
    },
    shiftItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 5,
    },
    clockIcon: {
      marginLeft: 10,
    },
    shiftText: {
      fontSize: 16,
      marginLeft: 10,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      // marginTop: 10,
    },
    locationText: {
      fontSize: 16,
      marginLeft: 5,
    },
    warningCard: {
      backgroundColor: "#FFF6E5",
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#F4A261",
      marginTop: 20,
    },
    warningText: {
      fontSize: 14,
      textAlign: "center",
      color: "#333",
    },
  });

  export default styles