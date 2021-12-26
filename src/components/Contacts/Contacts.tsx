import { ICONS } from '../../data';
import type { Icon } from '../../models';
import './Contacts.css';

export function Contacts() {
  function renderIcon(icon: Icon, index: number) {
    return (
      <a
        class='contacts__line'
        style={{ 'animation-delay': index * 0.3 }}
        target='_blank'
        rel='noopener noreferrer nofollow'
        href={icon.link}
      >
        {icon.element}
        <span class='contacts__line_label'>{icon.label}</span>
      </a>
    );
  }

  return (
    <div class='contacts__container'>
      <section class='contacts__column' style={{ width: '40rem' }}>
        {ICONS.map(renderIcon)}
      </section>
    </div>
  );
}
