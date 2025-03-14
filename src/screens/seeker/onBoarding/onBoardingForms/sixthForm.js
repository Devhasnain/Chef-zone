import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from 'react';

import colors from '../../../../config/Colors';


const SixthForm = () => {
    const [statement, setStatement] = useState('');

    const handleCheck = (current, value) => (current === value ? '' : value);

    const statements = [
        {
            title: 'Statement A',
            description: "Do not choose this statement if you’re in receipt of a State, Works or Private Pension. This is my first job since 6 April and since the 6 April I’ve not received payments from any of the following:",
            details: ['Jobseeker’s Allowance', 'Employment and Support Allowance', 'Incapacity Benefit']
        },
        {
            title: 'Statement B',
            description: "Do not choose this statement if you’re in receipt of a State, Works or Private Pension. Since 6 April I have had another job but I do not have a P45. And/or since the 6 April I have received payments from any of the following:",
            details: ['Jobseeker’s Allowance', 'Employment and Support Allowance', 'Incapacity Benefit']
        },
        {
            title: 'Statement C',
            description: "Choose this statement if:",
            details: ['you have another job and/or', 'you’re in receipt of a State, Works or Private Pension']
        }
    ];

    const renderStatement = (item, index) => (
        <View key={index} style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', paddingBottom: 5 }}>{item.title}</Text>
            <Text style={styles.greyText}>{item.description}</Text>
            {item.details.map((detail, i) => (
                <Text key={i} style={{color:colors.accentLight, fontSize:15}}>
                    <Icon name="long-arrow-right" style={{ color: colors.primary }} size={15} /> {detail}
                </Text>
            ))}
            <View style={styles.rowWrap}>
                <Text style={{fontSize:15}}>{`${item.title} applies to me`}</Text>
                <TouchableOpacity
                    onPress={() => setStatement(handleCheck(statement, item.title))}
                >
                    <View style={styles.checkbox(statement === item.title)}>
                        {statement === item.title && (
                            <Icon name="check" style={{ color: colors.primary }} size={15} />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, fontWeight: '700', paddingBottom: 10 }}>Employee Statement</Text>
                <Text style={styles.greyText}>Choose the statement that applies to you, either A, B, or C, and tick the appropriate box.</Text>
                {statements.map(renderStatement)}
            </ScrollView>
        </View>
    );
};

const styles = {
    greyText: {
        fontFamily: 'Montserrat-Regular',
        paddingLeft: 8,
        width: '94%',
        color: 'grey',
        paddingTop: 10,
        fontSize:15
    },
    rowWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:15,
        paddingVertical:10,
    },
    checkbox: (checked) => ({
        width: 24,
        height: 24,
        borderWidth: 1.5,
        borderColor: checked ? colors.primary : 'black',
        justifyContent: 'center',
        alignItems: 'center',
    })
};

export default SixthForm;
