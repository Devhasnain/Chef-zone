import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View, Alert, Image } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";

import Title from "../../../../components/title/title";
import Input from "../../../../components/input/Input";
import { images } from "../../../../config/Images";
import Label from "../../../../config/Label";
import styles from "./firstForms.style";


const FirstForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setIndex] = useState(0);

    const openImagePicker = () => {
        Alert.alert("Upload Photo", "Choose an option", [
            { text: "Take Photo", onPress: () => console.log("Take Photo") },
            { text: "Upload Photo", onPress: () => console.log("Upload Photo") },
            { text: "Cancel", style: "cancel" },
        ]);
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View>
                    <Title heading={"Employee details"} />
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="Date of birth" />
                    <Input placeholder="Address" />
                    <View>
                        <View>
                            <Input placeholder="City" />
                        </View>
                        <View>
                            <Input placeholder="Postcode" />
                        </View>
                    </View>
                    <Input placeholder="National Insurance No" />
                    <Input placeholder="Mobile number" />

                    {/* Radio Button Section with RNEUI */}
                    <Text style={styles.label}>{Label.DoYouCurrentlyHaveAnyJobs}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CheckBox
                            title="Yes"
                            checked={selectedIndex === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            containerStyle={{ backgroundColor: "transparent", borderWidth: 0, padding: 0 }}
                            textStyle={{ fontSize: 16 }}
                        />
                        <CheckBox
                            title="No"
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            containerStyle={{ backgroundColor: "transparent", borderWidth: 0, padding: 0 }}
                            textStyle={{ fontSize: 16 }}
                        />
                    </View>

                    {/* Upload Logo Section */}
                    <View style={styles.uploadSection}>
                        <Text>Upload Company Logo</Text>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoBox}>
                                {selectedImage ? (
                                    <Image source={{ uri: selectedImage }} style={styles.img} />
                                ) : (
                                    <Image source={images.uploadCompanyLogo} resizeMode="contain" style={styles.img} />
                                )}
                            </View>
                            <TouchableOpacity onPress={openImagePicker} style={styles.cameraButton}>
                                <Image source={images.cameraIcon} style={styles.cameraIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FirstForm;
