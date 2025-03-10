import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdownButton: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.bgSecondary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: '60%',
    backgroundColor: colors.bgSecondary,
    padding: 15,
    borderRadius: 10,
  },
  searchInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: colors.bgSecondary,
  },
  selectedItem: {
    backgroundColor: colors.primaryLight,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: colors.bgPrimary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: colors.secondary,
  },
});
