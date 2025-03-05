import { StyleSheet } from "react-native";

import fonts from "../../config/Fonts";


const Styles = StyleSheet.create({
    mainImgContainer: {
        flex: 1, backgroundColor: '#fff'
    },
    container: {
        flex: 2,
    },
    reviewImgContainer: {
        flex: 1,
        backgroundColor: '#231F20',
        width: '100%',
        height: '40%',
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    textStyle: {
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 15,
        fontFamily: fonts.poppinsRegular,
    },
    reviewImg: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginTop: -50,
        alignSelf: 'center',
    }
})

export default Styles;