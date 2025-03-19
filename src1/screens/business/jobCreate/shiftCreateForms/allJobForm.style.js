// PostShiftStyles.js
import { StyleSheet } from 'react-native';

import colors from '../../../../config/Colors';


export const postShiftStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal:20
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: '#555',
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export const createVenueStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  formContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  error: {
    color: "red"
  },
  oneRowTwoFieldConatiner: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  oneRowTwoField: {
    width: "48%"
  },
  createVenueBtn: {
    marginTop:10
  },
})
