import type { ModuleData } from '../models';

export const MODULES: ModuleData[] = [
  { title: 'HOME', margin: '0', route: '/', module: 'home' },
  {
    title: 'PROJECTS',
    margin: '2.1rem 0',
    route: '/projects',
    module: 'projects',
  },
  { title: 'PHOTOS', margin: '1.3rem 0', route: '/photos', module: 'photos' },
  {
    title: 'CONTACT',
    margin: '1.9rem 0',
    route: '/contact',
    module: 'contact',
  },
];
