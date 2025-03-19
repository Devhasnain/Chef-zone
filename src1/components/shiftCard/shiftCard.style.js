import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 0.3,
    borderColor: colors.accentLight
  },
  card: {
    padding: 10,
  },
  date: {
    fontSize: 12,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 12,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  location: {
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 5
  },
  timeAgo: {
    color: colors.accentLight,
    fontSize: 12,
    paddingBottom: 5,
    textAlign: "right"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  jobType: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 11,
    backgroundColor: colors.bgPrimary,
    textAlign: "center",
    paddingVertical: 1.2,
    borderRadius: 20,
    width:80
  },
  salary: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hour: {
    fontSize: 14,
    color: colors.accentLight,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

  },
  reviewBtn: {
    width: "50%",
    borderRadius: 0,
    backgroundColor: colors.bgSecondary,
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius:10
  },
  reviewBtnText: {
    color: "red"
  },
  detailBtn: {
    width: "50%",
    borderRadius: 0,
    backgroundColor: colors.bgSecondary,
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomRightRadius:10
  },
  detailBtnText: {
    color: colors.accent
  },
});

export default styles;