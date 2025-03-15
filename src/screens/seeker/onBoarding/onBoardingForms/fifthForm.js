import { View } from "react-native";

import AgreeTermsAndPolicy from "../../../../components/agreeTermsAndPolicy/agreeTermsAndPolicy";
import SingleSelector from "../../../../components/singleSelector/singleSelector";
import { fifthFormStyle as styles } from "./allForm.style";
import Title from "../../../../components/title/title";
import Input from "../../../../components/input/Input";


const securityQuestions = [
    { label: "What is your mother's maiden name?", value: "100" },
    { label: "What was your first pet's name?", value: "200" },
    { label: "What city were you born in?", value: "300" }
]


const FifthForm = () => {

    return (
        <View>
            <Title
                heading={"Signature of employee"}
                paragraph={"Signature form including name, date and security question"}
            />

            <Input placeholder="First name" />
            <Input placeholder="Last name" />
            <Input placeholder="Date of birth" />
            <SingleSelector
                placeholder="Security Question"
                data={securityQuestions}
            />
            <Input placeholder="Your security answer" />

            {/* Custom Checkbox with FontAwesome */}
            <AgreeTermsAndPolicy />
        </View>
    );
};

export default FifthForm;
