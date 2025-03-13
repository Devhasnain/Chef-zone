import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { View, Text, TouchableOpacity } from "react-native";

import FirstForm from "./onBoardingForms/firstForm";
import colors from "../../../config/Colors";
import styles from "./onBoarding.style";


const SeekerOnBoarding = () => {
  const onNextStep = () => console.log("Next Step");
  const onPrevStep = () => console.log("Previous Step");
  const onSubmit = () => console.log("Onboarding complete! twenty five and half");

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <ProgressSteps
        activeStepIconBorderColor={colors.primary}
        completedProgressBarColor={colors.primary}
        completedStepIconColor={colors.primary}
        activeLabelColor={colors.primary}
      >
        <ProgressStep
          label="Step 1"
          onNext={onNextStep}
          nextBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <FirstForm />
          </View>
        </ProgressStep>

        <ProgressStep
          label="Step 2"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <Text>This is Step 2 content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Step 3"
          onNext={onNextStep}
          nextBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <FirstForm />
          </View>
        </ProgressStep>

        <ProgressStep
          label="Step 4"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <Text>This is Step 2 content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Step 5"
          onNext={onNextStep}
          nextBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <FirstForm />
          </View>
        </ProgressStep>

        <ProgressStep
          label="Step 6"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <Text>This is Step 2 content</Text>
          </View>
        </ProgressStep>

        <ProgressStep
          label="Finish"
          onPrevious={onPrevStep}
          onSubmit={onSubmit}
          nextBtnTextStyle={{ color: colors.primary }}
          previousBtnTextStyle={{ color: colors.primary }}
        >
          <View>
            <Text>Final step! 🎉</Text>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default SeekerOnBoarding;
