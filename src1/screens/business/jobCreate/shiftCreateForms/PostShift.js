import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// PostShiftScreen.js
import React, { useState } from 'react';
import { Switch } from '@rneui/themed';

import SingleSelector from '../../../../components/singleSelector/SingleSelector';
import { navigate } from '../../../../navigation/NavigationService';
import { postShiftStyles as styles } from './allJobForm.style';
import Header from '../../../../components/header/Header';
import Button from '../../../../components/button/Button';
import { venues } from '../../../../constants/constant';
import Title from '../../../../components/title/Title';
import Label from '../../../../config/Label';


const PostShift = () => {
    const [shift, setshift] = useState('');
    const [isEvent, setIsEvent] = useState(false);
    const handleNavigate = (screen) => {
        navigate(screen);
    }
    return (
        <View style={styles.mainContainer}>
            <Header />

            <View style={styles.container}>

                <Title heading={Label.postShift} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ width: "85%" }}>
                        <SingleSelector placeholder={Label.Venue} data={venues} />
                    </View>
                    <View style={{ width: "13%" }}>
                        <Button text="✚" additionalTestStyle={{ fontSize: 20 }} onPress={() => handleNavigate('CreateVenue')} />
                    </View>
                </View>

                <View style={styles.switchContainer}>
                    <Switch
                        value={isEvent}
                        onValueChange={setIsEvent}
                        color="#FF5722"
                    />
                    <Text style={styles.switchText}>{Label.isThisAnEvent}</Text>
                </View>

                <Button text={Label.addRole} onPress={() => handleNavigate('ViewRole')}/>
            </View>

        </View>
    );
};

export default PostShift;
