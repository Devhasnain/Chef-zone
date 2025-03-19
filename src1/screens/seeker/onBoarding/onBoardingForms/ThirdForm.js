import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";

import TextSelect from "../../../../components/textSelect/TextSelect";
import { rolesData } from "../../../../constants/constant";
import Title from "../../../../components/title/Title";
import Label from "../../../../config/Label";


const ThirdForm = () => {
    const [selectedRoles, setSelectedRoles] = useState([]);

    const handleRoleSelect = useCallback((selected) => {
        setSelectedRoles(selected);
        console.log("Selected roles:", selected);
    }, []);

    return (
        <View style={{flex:1}}>
            <Title heading={Label.whatCanYouDo} />
            <TextSelect rolesData={rolesData} onSelect={handleRoleSelect} />
        </View>
    );
};

export default ThirdForm;