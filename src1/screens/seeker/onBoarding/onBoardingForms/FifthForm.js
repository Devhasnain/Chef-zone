import { View } from "react-native";
import { memo } from "react";

import AgreeTermsAndPolicy from "../../../../components/agreeTermsAndPolicy/AgreeTermsAndPolicy";
import SingleSelector from "../../../../components/singleSelector/SingleSelector";
import Title from "../../../../components/title/Title";
import Input from "../../../../components/input/Input";
import Label from "../../../../config/Label";


const securityQuestions = [
    { label: Label.securityQues1, value: Label.securityQues1 },
    { label: Label.securityQues2, value: Label.securityQues2 },
    { label: Label.securityQues3, value: Label.securityQues3 }
]


const FifthForm = () => {

    return (
        <View>
            <Title
                heading={Label.signOfEmployee}
                paragraph={Label.paragraphy}
            />

            <Input placeholder={Label.firstName} />
            <Input placeholder={Label.lastName} />
            <Input placeholder={Label.dob} />
            <SingleSelector
                placeholder={Label.SecurityQues}
                data={securityQuestions}
            />
            <Input placeholder={Label.yourAnswer} />

            <AgreeTermsAndPolicy />
        </View>
    );
};

export default memo(FifthForm);