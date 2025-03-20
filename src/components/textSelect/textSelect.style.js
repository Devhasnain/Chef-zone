// RolesSelectionScreen.style.js
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  roleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
  },
  icon: {
    width:"100%",
    height:"100%",
  },
  roleText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  selectedRole: {
    borderColor: "#FF5A00",
  },
  disabledRole: {
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",
  },
  disabledText: {
    color: "#b0b0b0",
  },
});

export default styles;
