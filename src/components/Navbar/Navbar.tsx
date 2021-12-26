import clsx from 'clsx';
import { For } from 'solid-js';
import { MODULES } from '../../data';
import './Navbar.css';
import type { ModuleData } from '../../models';
import { handleModuleChange } from '../../store/actions';
import { isMobile, selectedModule } from '../../store/store';
import { ifTrue } from '../../tools';
import { NavButton } from '../NavButton';

export function Navbar() {
  function handleOnButtonClick(value: string) {
    return function call() {
      handleModuleChange(value);
    };
  }

  return (
    <nav class={clsx(ifTrue(isMobile(), 'nav_animation_mobile'))}>
      <For each={Object.values(MODULES)}>
        {(value: ModuleData) => (
          <NavButton
            active={value.title === selectedModule()}
            module={value}
            onClick={handleOnButtonClick(value.title)}
          />
        )}
      </For>
    </nav>
  );
}
