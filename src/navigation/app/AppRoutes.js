import WelcomeScreen from '../../screens/welcomeToChefzoner/welcomeScreen';
import Splash from '../../screens/splash/Splash';
import CVLive from '../../screens/cvLive/cvLive';
import Intro from '../../screens/intro/intro';
import BrowserJob from '../../screens/browserJob/browserJob';
import JobDetail from '../../screens/jobDetail/jobDetail';


export const appRoutes = [
  {
    name: 'Splash',
    component: Splash,
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
    name: 'Intro',
    component: Intro,
  },
  {
    name: 'WelcomeScreen',
    component: WelcomeScreen,
  },
];
