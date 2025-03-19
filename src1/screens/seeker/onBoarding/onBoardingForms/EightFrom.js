import { Text, View } from "react-native";
import { memo, useState } from "react";

import { VideoBanner } from "../../../../components/videoBanner/VideoBanner";
import { videoBannerContent } from "../../../../constants/constant";
import { eightFormStyle as styles } from "./allForm.style";
import Button from "../../../../components/button/Button";
import Title from "../../../../components/title/Title";
import Label from "../../../../config/Label";


const EightForm = () => {
    const [active, setActive] = useState(false);

    const handle = (condition) => {
        setActive(condition);
    };

    return (
        <View>
            <Title heading={Label.skillAssessmentQes} />
            <Text style={styles.questionText}>
                {Label.haveYouWatchChefZone}
            </Text>
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button text={Label.Yes} onPress={() => handle(false)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button text={Label.No} onPress={() => handle(true)} />
                </View>
            </View>
            <Button text={Label.Submit}/>
            {active && (
                <View>
                    <Text style={styles.videoHeading}>{Label.handbookVideos}</Text>
                    <Text style={styles.videoNote}>{Label.pleaseWatchVideo}</Text>
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

export default memo(EightForm);
