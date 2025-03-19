import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.bgSecondary,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    alignItems: 'center',
    paddingBottom:10
  },
  icon: {
    marginBottom: 4,
  },
  text: {
    color: colors.accentLight,
    fontSize: 11,
  },
  activeText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;