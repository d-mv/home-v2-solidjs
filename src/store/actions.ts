// eslint-disable-next-line import/no-cycle
import { isMobile, selectedModule, setNavBarOpen, setSelectedModule, setProject } from './store';

export function handleModuleChange(newModule: string) {
  if (newModule !== selectedModule()) setSelectedModule(newModule);

  if (isMobile()) setNavBarOpen(false);
}

export function closeModal() {
  setProject();
}
