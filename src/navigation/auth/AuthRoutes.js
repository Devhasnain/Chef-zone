import BusinessOnBoarding from '../../screens/business/onBoarding.js/BusinessOnBoarding';
import SeekerOnBoarding from '../../screens/seeker/onBoarding/SeekerOnBoarding';
import SignUp from '../../screens/signUp/SignUp';
import SignIn from '../../screens/signIn/SignIn';


export const authRoutes = [
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'SeekerOnBoarding',
    component: SeekerOnBoarding,
  },
  {
    name: 'BusinessOnBoarding',
    component: BusinessOnBoarding,
  },
];
