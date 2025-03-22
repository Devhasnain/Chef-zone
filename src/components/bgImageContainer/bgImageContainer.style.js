import { StyleSheet } from 'react-native';

import colors from '../../config/Colors';
import fonts from '../../config/Fonts';


export default StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: fonts.poppinsRegular,
        alignItems: 'center',
        backgroundColor: colors.bgSecondary,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
})