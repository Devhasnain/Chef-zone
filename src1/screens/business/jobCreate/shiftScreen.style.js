import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50
    },
    tabContainer: {
        paddingTop: 10,
        paddingBottom: 30,
    },
    listContainer: {
        paddingBottom: 10,
    },
    tabButton: {
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal:10,
        height:35,
        paddingVertical:6
    },
    tabText: {
        color: '#333',
        fontSize:15
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: 60,
        height: 60
    },
    buttonText: {
        fontSize: 13
    },
    button: {
        width: "30%",
        minHeight: 40
    },
    textNotFound: {
        textAlign: 'center',
        color: '#888',
        marginTop: 20
    }
});