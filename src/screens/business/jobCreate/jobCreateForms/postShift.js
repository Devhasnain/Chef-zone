import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// PostShiftScreen.js
import React, { useState } from 'react';
import { Switch } from '@rneui/themed';

import SingleSelector from '../../../../components/singleSelector/singleSelector';
import { venueCreateStyles as styles } from './allJobForm.style';
import Header from '../../../../components/header/header';
import Button from '../../../../components/button/Button';
import { venues } from '../../../../constants/constant';
import Title from '../../../../components/title/title';


const PostShift = () => {
    const [shift, setshift] = useState('');
    const [isEvent, setIsEvent] = useState(false);
    const handleNavigate = (screen) => {

    }
    return (
        <View style={styles.container}>
            <Header />
            <Title heading={'Post a shift'} />
            <View style={{ flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" }}>
                <View style={{ width: "85%" }}>
                    <SingleSelector placeholder='Venue' data={venues} />
                </View>
                <View style={{ width: "13%" }}>
                    <Button text="✚" additionalTestStyle={{ fontSize: 20 }} />
                </View>
            </View>

            <View style={styles.switchContainer}>
                <Switch
                    value={isEvent}
                    onValueChange={setIsEvent}
                    color="#FF5722"
                />
                <Text style={styles.switchText}>Is this an event?</Text>
            </View>

            <Button text='Add role' onPress={handleNavigate('CreateVenue')}/>
        </View>
    );
};

export default PostShift;
