import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from 'react';

import { statements } from '../../../../constants/constant';
import { sixthFormStyle as styles } from "./allForm.style";
import Label from '../../../../config/Label';


const SixthForm = () => {
    const [statement, setStatement] = useState('');

    const handleCheck = (current, value) => (current === value ? '' : value);

  ;

    const renderStatement = (item, index) => (
        <View key={index} style={styles.statementContainer}>
            <Text style={styles.statementTitle}>{item.title}</Text>
            <Text style={styles.greyText}>{item.description}</Text>
            {item.details.map((detail, i) => (
                <Text key={i} style={styles.detailText}>
                    <Icon name="long-arrow-right" style={styles.arrowIcon} size={15} /> {detail}
                </Text>
            ))}
            <View style={styles.rowWrap}>
                <Text style={styles.optionText}>{`${item.title} applies to me`}</Text>
                <TouchableOpacity onPress={() => setStatement(handleCheck(statement, item.title))}>
                    <View style={styles.checkbox(statement === item.title)}>
                        {statement === item.title && (
                            <Icon name="check" style={styles.checkIcon} size={15} />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headerText}>{Label.employeeStatement}</Text>
                <Text style={styles.greyText}>Choose the statement that applies to you, either A, B, or C, and tick the appropriate box.</Text>
                {statements.map(renderStatement)}
            </ScrollView>
        </View>
    );
};


export default SixthForm;
