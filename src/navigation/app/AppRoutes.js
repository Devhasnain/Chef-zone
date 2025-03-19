import { TermsAndConditions } from '../../screens/termsAndConditions/termsAndConditions';
import CreateVenue from '../../screens/business/jobCreate/shiftCreateForms/createVenue';
import WelcomeScreen from '../../screens/welcomeToChefzoner/welcomeScreen';
import { PrivacyPolicy } from '../../screens/privacyPolicy/privacyPolicy';
import BrowserJob from '../../screens/browserJob/browserJob';
import JobDetail from '../../screens/jobDetail/jobDetail';
import Splash from '../../screens/splash/Splash';
import CVLive from '../../screens/cvLive/cvLive';
import Intro from '../../screens/intro/intro';


export const appRoutes = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'Intro',
    component: Intro,
  },
  {
    name: 'WelcomeScreen',
    component: WelcomeScreen,
  },
  {
    name: 'CVLive',
    component: CVLive,
  },
  {
    name: 'BrowserJob',
    component: BrowserJob,
  },
  {
    name: 'JobDetail',
    component: JobDetail,
  },
  {
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    name: 'TermsAndConditions',
    component: TermsAndConditions,
  },
  {
    name: 'CreateVenue',
    component: CreateVenue,
  },
];
