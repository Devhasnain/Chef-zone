import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, Image } from 'react-native';
import React from 'react';


export const VideoBanner = ({ name, poster }) => {
    return (
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
            }}>
            <Icon name="circle" style={{ color: '#000' }} size={15} />
            <View
                style={{
                    width: '90%',
                    flexDirection: 'row',
                    // alignItems: 'center',
                }}>
                <Image
                    source={poster}
                    style={{
                        width: '30%',
                        height: 70,
                        marginRight: 10,
                        borderRadius: 5,
                        resizeMode: 'contain',
                    }}
                />
                <Text
                    style={{ fontSize: 13, color: '#312553', marginTop: 12 }}>{name}</Text>
                <View style={{ width: '65%' }}>
                </View>
            </View>
        </View>
    );
};
