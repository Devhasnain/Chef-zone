import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    textNotFound: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 30
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal:20
    },
    filterButton: {
        width: 30,
        height: 30,
    },
    modalContainer: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 10,
        elevation: 5, // Shadow effect
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        gap: 10
    },
    radio: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
    },
    separateWidth: {
        width: "48%"
    },
    selectedRadio: {
        padding: 10,
        borderWidth: 1,
        borderColor: colors.bgPrimary,
        backgroundColor: colors.bgPrimary,
        color: colors.secondary,
        borderRadius: 15,
        textAlign: 'center',
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    rateInput: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    searchButton: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    searchInput: {
        width: "88%"
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    closeButton: {
        textAlign: 'right',
        color: 'red',
    },
});

export default styles;
