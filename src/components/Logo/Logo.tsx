import clsx from 'clsx';
import { navBarOpen, setNavBarOpen } from '../../store/store';
import { ifTrue } from '../../tools';
import './Logo.css';

export function Logo() {
  return (
    <button
      class={clsx('logo_container', ifTrue(!navBarOpen(), 'logo_text_underlined'))}
      id='logo'
      onclick={() => setNavBarOpen(!navBarOpen())}
    >
      DM
    </button>
  );
}
