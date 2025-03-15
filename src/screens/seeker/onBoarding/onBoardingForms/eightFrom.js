import { Text, View } from "react-native";
import { useState } from "react";

import { VideoBanner } from "../../../../components/videoBanner/videoBanner";
import { videoBannerContent } from "../../../../constants/constant";
import { eightFormStyle as styles } from "./allForm.style";
import Button from "../../../../components/button/Button";
import Title from "../../../../components/title/title";
import Label from "../../../../config/Label";


const EightForm = () => {
    const [active, setActive] = useState(false);

    const handle = (condition) => {
        setActive(condition);
    };

    return (
        <View>
            <Title heading={"Skill assessment questions"} />
            <Text style={styles.questionText}>
                {Label.haveYouWatchChefZone}
            </Text>
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button text="Yes" onPress={() => handle(false)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button text="No" onPress={() => handle(true)} />
                </View>
            </View>
            <Button text="Submit" />
            {active && (
                <View>
                    <Text style={styles.videoHeading}>Handbook videos</Text>
                    <Text style={styles.videoNote}>Please watch videos it will be submit automatically</Text>
                    {videoBannerContent.map((item, index) => (
                        <View key={index}>
                            <VideoBanner poster={item.image} name={item.name} />
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default EightForm;
