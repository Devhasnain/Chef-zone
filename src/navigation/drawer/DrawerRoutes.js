import { images } from '../../config/Images';
import BrowserJob from '../../screens/browserJob/BrowserJob';

export const drawerRoutes = [
  {
    name: 'Home',
    component: BrowserJob,
    image:images.homeImage
  },
  {
    name:"Notifications",
    component:"",
    image:images.notificationAlertImage
  },
  {
    name:"My Wallet",
    component:"",
    image:images.walletImage
  },
  {
    name:"Timesheets",
    component:"",
    image:images.timeSheetImage
  },
  {
    name:"Documents",
    component:"",
    image:images.documentImage
  },
  {
    name:"Reviews",
    component:"",
    image:images.reviewsImage
  },
  {
    name:"Video & Assessnents",
    component:"",
    image:images.videoImage
  },
  {
    name:"Templates",
    component:"",
    image:images.templateImage
  }
];
