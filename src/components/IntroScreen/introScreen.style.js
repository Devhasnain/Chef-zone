import { Dimensions, StyleSheet } from "react-native";

import colors from "../../config/Colors";
import fonts from "../../config/Fonts";


const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
    mainImgContainer: {
        flex: 1,
        width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        backgroundColor: colors.accent,
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
    },
    starContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    starText: {
        color: colors.primary,
        fontSize: 25,
        padding: 4,
    }
})

export default Styles;