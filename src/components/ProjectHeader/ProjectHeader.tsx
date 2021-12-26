import { CloseButton } from '..';
import './ProjectHeader.css';

interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader(props: ProjectHeaderProps) {
  return (
    <div class='project_header__container' style={{ margin: '0 2.5%' }}>
      <h2 class='project_header__title'>{props.title}</h2>
      <span class='project_header__line' />
      {window.innerWidth >= 420 && <CloseButton />}
    </div>
  );
}
