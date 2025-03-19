import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
    // shadowColor: colors.accent,
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    // elevation: 3,
    marginVertical: 5,
    borderWidth: 0.3,
    borderColor: colors.accentLight,
  },
  date: {
    fontSize: 12,
    paddingBottom: 2,
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
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 5,
  },
  timeAgo: {
    color: colors.accentLight,
    fontSize: 12,
    paddingBottom: 5,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobType: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 11,
    backgroundColor: colors.bgPrimary,
    paddingHorizontal: 8,
    paddingVertical: 1.2,
    borderRadius: 20,
  },
  salary: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hour: {
    fontSize: 14,
    color: colors.accentLight,
  },
});

export default styles;
