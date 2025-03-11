import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have @expo/vector-icons
import { ScrollView } from "react-native";
import React, { useState } from "react";

import Header from "../../../components/header/header";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { images } from "../../../config/Images";
import styles from "./businessRegister.style";
import colors from "../../../config/Colors";


const FirstForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the image picker menu
    const openImagePicker = () => {
        Alert.alert(
            "Upload Photo",
            "Choose an option",
            [
                { text: "Take Photo", onPress: () => console.log("Take Photo") },
                { text: "Upload Photo", onPress: () => console.log("Upload Photo") },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    return (
        <View style={styles.formContainer}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ paddingVertical: 5 }}>
                    Please fill your company information.
                </Text>

                <View>
                    <Input placeholder="Business" />
                    <Input placeholder="Contact name" />
                    <Input placeholder="Brand name" />
                    <Input placeholder="Company number" />
                    <Input placeholder="VAT number" />
                    <Input placeholder="Mobile number" />

                    {/* Image Container with Upload Icon */}
                    <View style={{ position: "relative", alignSelf: "flex-end" }}>
                        <View style={{
                            width: 120,
                            height: 120,
                            borderWidth: 1,
                            borderColor: "#ccc",
                            borderRadius: 10,
                            overflow: "hidden",
                        }}>
                            {selectedImage ? (
                                <Image source={{ uri: selectedImage }} style={{ width: "100%", height: "100%" }} />
                            ) : (
                                <Image source={images.uploadCompanyLogo} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
                            )}
                        </View>

                        {/* Camera Icon to Open Menu */}
                        <TouchableOpacity
                            onPress={openImagePicker}
                            style={{
                                position: "absolute",
                                top: 40,
                                left: -20,
                                padding: 5,
                                borderRadius: 20,
                                backgroundColor: colors.secondary
                            }}
                        >
                            <Image source={images.cameraIcon} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>

                    <Input placeholder="Address" />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "48%" }}>
                            <Input placeholder="City" />
                        </View>
                        <View style={{ width: "48%" }}>
                            <Input placeholder="Postcode" />
                        </View>
                    </View>
                    <Input placeholder="Company description" />
                    <Text style={{ paddingVertical: 5 }}>
                        Please fill your company information.
                    </Text>

                    <Button text="Contiue"/>
                </View>
            </ScrollView>
        </View>
    );
};

export default FirstForm;
