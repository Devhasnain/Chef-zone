import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { Header as RNEHeader } from '@rneui/themed';
import { Image } from 'react-native';
import React from 'react';

import Styles from './header.style';


const Header = ({ title, image, style }) => {
    const navigation = useNavigation(); // Navigation hook for back action

    return (
        <RNEHeader
            containerStyle={Styles.container}
            statusBarProps={{
                barStyle: 'dark-content',
                backgroundColor: 'transparent',
            }}
            leftComponent={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={Styles.backText}>Back</Text>
                </TouchableOpacity>
            }
            centerComponent={
                image ?
                    <Image
                        source={image}
                        style={style}
                    />
                    : <Text style={style}>{title}</Text>
            }
        />
    );
}


export default Header;
