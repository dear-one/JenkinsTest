import { IRouteItem } from './index';
import CvIndex from '../view/cv/CvIndex.vue';

const cvRouter: Array<IRouteItem> = [
  {
    path: '/cvs',
    name: 'cvIndex',
    component: CvIndex
  }
]

export default cvRouter;