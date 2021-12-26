import { createSignal } from 'solid-js';
import type { Option, ProjectType } from '../models';

import {} from './actions';

const isSmallScreen = () => window.innerWidth <= 500;

export const [isMobile, setIsMobile] = createSignal(isSmallScreen());

export const [selectedModule, setSelectedModule] = createSignal('HOME');

export const [project, setProject] = createSignal<Option<ProjectType>>();

export const [navBarOpen, setNavBarOpen] = createSignal(!isMobile());

export const [photo, setPhoto] = createSignal(0);

window.addEventListener('resize', () => {
  const newSize = isSmallScreen();

  if (newSize !== isMobile()) setIsMobile(newSize);
});
