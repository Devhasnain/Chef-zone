import { TermsAndConditions } from '../../screens/termsAndConditions/TermsAndConditions';
import CreateVenue from '../../screens/business/jobCreate/shiftCreateForms/CreateVenue';
import PostShift from '../../screens/business/jobCreate/shiftCreateForms/PostShift';
import ViewRole from '../../screens/business/jobCreate/shiftCreateForms/ViewRole';
import WelcomeScreen from '../../screens/welcomeToChefzoner/WelcomeScreen';
import { PrivacyPolicy } from '../../screens/privacyPolicy/PrivacyPolicy';
import BrowserJob from '../../screens/browserJob/BrowserJob';
import JobDetail from '../../screens/jobDetail/JobDetail';
import Splash from '../../screens/splash/Splash';
import CVLive from '../../screens/cvLive/CVLive';
import Intro from '../../screens/intro/Intro';


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
    name: 'PostShift',
    component: PostShift,
  },
  {
    name: 'CreateVenue',
    component: CreateVenue,
  },
  {
    name: 'ViewRole',
    component: ViewRole,
  },
];
