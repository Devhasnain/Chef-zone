import { Text, View } from "react-native";

import TextSelect from "../../../../components/textSelect/TextSelect";
import { backOfHouseRoles } from "../../../../constants/constant";
import Header from "../../../../components/header/Header";
import Button from "../../../../components/button/Button";


const ViewRole = () => {
    const handleSingleSelect = (id, isSelected) => {
        console.log(`Role ${id} was ${isSelected ? "selected" : "deselected"}`);
    };
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header />
            <View style={{ paddingHorizontal: 20, paddingTop: 20 , flex:1}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Button text="Back of dfsHouse" additionalStyle={{ width: "48%" }} />
                    <Button text="Front of House" additionalStyle={{ width: "48%" }} />
                </View>
                <TextSelect
                    rolesData={backOfHouseRoles}
                    onSingleSelect={handleSingleSelect}
                />
            </View>
        </View>
    )
}

export default ViewRole;