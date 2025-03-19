import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { View } from 'react-native';

import SeventhForm from './onBoardingForms/SeventhForm';
import SecondForm from './onBoardingForms/SecondForm';
import ForthForm from './onBoardingForms/FourthForm';
import ThirdForm from './onBoardingForms/ThirdForm';
import SixthForm from './onBoardingForms/SixthForm';
import NinthForm from './onBoardingForms/NinthForm';
import FirstForm from './onBoardingForms/FirstForm';
import FifthForm from './onBoardingForms/FifthForm';
import EightForm from './onBoardingForms/EightFrom';
import colors from '../../../config/Colors';
import styles from './onBoarding.style';


const SeekerOnBoarding = () => {
  const onNextStep = () => console.log('Next Step');
  const onPrevStep = () => console.log('Previous Step');
  const onSubmit = () =>
    console.log('Onboarding complete! twenty five and half');
  // Main return
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <ProgressSteps
        activeStepIconBorderColor={colors.primary}
        completedProgressBarColor={colors.primary}
        completedStepIconColor={colors.primary}
        activeLabelColor={colors.primary}
        labelFontSize={10}
        marginBottom={10}
        marginTop={10}>
        <ProgressStep
          // label="Step 1"
          onNext={onNextStep}
          nextBtnTextStyle={{color: colors.primary}}>
          <View>
            <FirstForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 2"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{color: colors.primary}}
          previousBtnTextStyle={{color: colors.primary}}>
          <View>
            <SecondForm />
          </View>
        </ProgressStep>
        <ProgressStep
          // label="Step 3"
          onNext={onNextStep}
          nextBtnTextStyle={{color: colors.primary}}>
          <View>
            <ThirdForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 4"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{color: colors.primary}}
          previousBtnTextStyle={{color: colors.primary}}>
          <View>
            <ForthForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 5"
          onNext={onNextStep}
          nextBtnTextStyle={{color: colors.primary}}>
          <View>
            <FifthForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 6"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{color: colors.primary}}
          previousBtnTextStyle={{color: colors.primary}}>
          <View>
            <SixthForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 5"
          onNext={onNextStep}
          nextBtnTextStyle={{color: colors.primary}}>
          <View>
            <SeventhForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Step 6"
          onPrevious={onPrevStep}
          nextBtnTextStyle={{color: colors.primary}}
          previousBtnTextStyle={{color: colors.primary}}>
          <View>
            <EightForm />
          </View>
        </ProgressStep>

        <ProgressStep
          // label="Finish"
          onPrevious={onPrevStep}
          onSubmit={onSubmit}
          nextBtnTextStyle={{color: colors.primary}}
          previousBtnTextStyle={{color: colors.primary}}>
          <View>
            <NinthForm />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default SeekerOnBoarding;
