import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { useCallback, useMemo } from "react";

import { navigate } from "../../../navigation/NavigationService";
import ShiftCard from "../../../components/shiftCard/ShiftCard";
import { jobDataDemo } from "../../../constants/constant";
import Header from "../../../components/header/Header";
import Button from "../../../components/button/Button";
import { images } from "../../../config/Images";
import { styles } from "./shiftScreen.style";
import Label from "../../../config/Label";


const tabItems = ["Active shifts", "Pending shifts", "Complete shifts", "Close shifts", "Templates"];

const ShiftsScreen = () => {
    const renderItem = useCallback(({ item }) => <ShiftCard shiftData={item} />, []);
    const keyExtractor = useCallback((item) => item.id?.toString() || item.title, []);

    const renderTabItem = useCallback(({ item }) => (
        <View style={styles.tabButton}>
            <Text style={styles.tabText}>{item}</Text>
        </View>
    ), []);

    const handleNavigate = (screen) => {
        navigate('AppStack', { screen: screen });

    }

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View style={styles.headerRow}>
                    <Image source={images.splashImg} style={styles.image} />
                    <Button text="Create shift" additionalTestStyle={styles.buttonText} additionalStyle={styles.button} onPress={() => handleNavigate("PostShift")} />
                </View>

                <FlatList
                    data={tabItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id?.toString()}
                    renderItem={renderTabItem}
                    contentContainerStyle={styles.tabContainer}
                />

                {jobDataDemo.length > 0 ? (
                    <FlatList
                        data={jobDataDemo}
                        keyExtractor={(item) => item.id?.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                ) : (
                    <Text style={styles.textNotFound}>{Label.noActiveShiftFound}</Text>
                )}
            </View>
        </View>
    );
};

export default ShiftsScreen;