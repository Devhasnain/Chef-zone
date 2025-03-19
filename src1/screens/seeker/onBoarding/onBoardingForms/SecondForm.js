import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { memo, useState } from "react";

import { secondFormStyle as styles } from "./allForm.style";
import Title from "../../../../components/title/Title";
import Input from "../../../../components/input/Input";
import colors from "../../../../config/Colors";
import Label from "../../../../config/Label";


const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const shifts = ["early", "day", "night", "all"];
const shiftsText = ["Early", "Day", "Night", "All"];
const timeLine = ["4 am +", "8 am +", "6 pm +", "all"];

const HourlyRateScreen = () => {
    const [availability, setAvailability] = useState(
        days.map(() => ({ early: false, day: false, night: false, all: false }))
    );
    const [hrate, setHrate] = useState('')

    const toggleShift = (dayIndex, shift) => {
        const updatedAvailability = [...availability];
        const dayAvailability = updatedAvailability[dayIndex];

        if (shift === "all") {
            updatedAvailability[dayIndex] = {
                early: true,
                day: true,
                night: true,
                all: true,
            };
        } else {
            dayAvailability[shift] = !dayAvailability[shift];
            const { early, day, night } = dayAvailability;
            dayAvailability.all = early && day && night;
        }

        setAvailability(updatedAvailability);
    };
    
    const handleChange = (data) => {
        setHrate(data)
    }

    return (
        <View style={styles.container}>
            <Title heading={Label.setHourlyRate} />
            <Input placeholder={Label.minimumHourlyRate} onChange={(e) => handleChange(e)} keyboardType="numeric"/>
            <Text style={styles.subHeader}>{Label.setAvailability}</Text>
            <View style={styles.shiftRowText}>
                <Text style={styles.shiftLabel}>{Label.shifts}</Text>
                <View style={styles.iconContainer}>
                    {shiftsText.map((item, index) => (
                        <Text key={index} style={styles.shiftLabel}>{item}</Text>
                    ))}
                </View>
            </View>
            {days.map((day, index) => (
                <View key={index} style={styles.shiftRow}>
                    <Text style={styles.dayLabel}>{day}</Text>
                    <View style={styles.iconContainer}>
                        {shifts.map((shift) => (
                            <TouchableOpacity
                                key={shift}
                                onPress={() => toggleShift(index, shift)}
                            >
                                <Icon
                                    name={
                                        shift === "night"
                                            ? "moon-o"
                                            : shift === "all"
                                                ? "clock-o"
                                                : "sun-o"
                                    }
                                    size={20}
                                    color={availability[index][shift] ? colors.primary : "#ccc"}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}
            <View style={styles.timeRowContainer}>
                <View style={styles.timeRow}>
                    {timeLine.map((time, index) => (
                        <Text key={index}>{time}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default memo(HourlyRateScreen);
