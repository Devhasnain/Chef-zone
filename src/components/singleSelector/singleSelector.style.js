import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdownButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.accentLight,
    borderRadius: 15,
    backgroundColor: colors.bgSecondary,
  },
  selectedText: {
    fontSize: 14,
    color: colors.accentLight,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    height: '60%',
    backgroundColor: colors.bgSecondary,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderColor: colors.accentLight,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 14,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: colors.bgPrimary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default styles;
