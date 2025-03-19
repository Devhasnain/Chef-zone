import { FlatList, View, Text, Image } from "react-native";
import { useCallback, useMemo } from "react";

import ShiftCard from "../../../components/shiftCard/ShiftCard";
import { jobDataDemo } from "../../../constants/constant";
import Header from "../../../components/header/Header";
import Button from "../../../components/button/Button";
import { images } from "../../../config/Images";
import { styles } from "./shiftScreen.style";
import Label from "../../../config/Label";


const ShiftsScreen = () => {
    const renderItem = useCallback(({ item }) => {
        return <ShiftCard shiftData={item} />;
    }, []);

    const keyExtractor = useMemo(() => (_, index) => index.toString(), []);

    return (
        <View style={styles.container}>
            <Header />
            <View style={{paddingHorizontal:20}}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Image source={images.splashImg} style={{ width: 60, height: 60 }} />
                    <View style={{ width: "30%" }}>
                        <Button text="Create shifte" additionalTestStyle={{ fontSize: 13 }} />
                    </View>
                </View>

                {jobDataDemo.length > 0 ? (
                    <FlatList
                        data={jobDataDemo}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                ) : (
                    <Text style={styles.textNotFound}>{Label.noActiveShiftFound}</Text>
                )}
            </View>
        </View>
    );
};


export default ShiftsScreen;