import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

import Title from "../../../../components/title/title";
import Input from "../../../../components/input/Input";
import colors from "../../../../config/Colors";
import styles from "./secondForm.style";


const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const shifts = ["early", "day", "night", "all"];
const shiftsText = ["Early", "Day", "Night", "All"];

const HourlyRateScreen = () => {
    const [availability, setAvailability] = useState(
        days.map(() => ({ early: false, day: false, night: false, all: false }))
    );

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

    const renderDayRow = ({ item: day, index }) => (
        <View style={styles.shiftRow}>
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
    );

    return (
        <View style={styles.container}>
            <Title heading={"Set hourly rate (£)"} />
            <Input placeholder="Minimum hourly rate" />
            <Text style={styles.subHeader}>Set availability</Text>
            <View style={styles.shiftRowText}>
                <Text style={styles.shiftLabel}>Shifts</Text>
                <View style={styles.iconContainer}>
                    {shiftsText.map((item, index) => (
                        <Text key={index} style={styles.shiftLabel}>{item}</Text>
                    ))}
                </View>
            </View>
            <FlatList
                data={days}
                renderItem={renderDayRow}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={styles.timeRowContainer}>
                <View style={styles.timeRow}>
                    <Text>4 am +</Text>
                    <Text>8 am +</Text>
                    <Text>6 pm +</Text>
                    <Text>all</Text>
                </View>
            </View>
        </View>
    );
};

export default HourlyRateScreen;
