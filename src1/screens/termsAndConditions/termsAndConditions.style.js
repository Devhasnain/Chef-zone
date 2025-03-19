import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  sectionContent: {
    textAlign: 'justify',
    paddingTop: 8,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
