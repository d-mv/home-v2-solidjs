import { BsLinkedin } from 'solid-icons/bs';
import { FaBrandsGithubAlt } from 'solid-icons/fa';
import type { Icon } from '../models';

export const ICONS: Icon[] = [
  {
    element: <FaBrandsGithubAlt />,
    label: 'GitHub repositories',
    link: 'https://github.com/d-mv',
  },
  {
    element: <BsLinkedin />,
    label: 'LinkedIn page',
    link: 'https://www.linkedin.com/in/dmitry-melnikov-pm/',
  },
];
