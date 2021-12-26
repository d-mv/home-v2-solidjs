import clsx from 'clsx';
import type { ModuleData } from '../../models';
import { isMobile } from '../../store';
import { ifTrue } from '../../tools';
import './NavButton.css';

export interface NavButtonProps {
  module: ModuleData;
  active: boolean;
  onClick: () => void;
}

export function NavButton(props: NavButtonProps) {
  return (
    <div
      class='nav_box'
      id={`navbar__box_${props.module.title}`}
      style={{
        height: ifTrue(props.module.title === 'HOME' && !isMobile(), '10rem', undefined),
      }}
    >
      <button
        class={clsx('nav_button', ifTrue(props.active, 'nav_button_active'))}
        id='navbar__button'
        style={{ margin: props.module.margin }}
        onClick={props.onClick}
      >
        {props.module.title}
      </button>
    </div>
  );
}
