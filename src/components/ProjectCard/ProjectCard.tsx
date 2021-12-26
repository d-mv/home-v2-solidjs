import type { ProjectType } from '../../models';
import { cardImageSize } from '../../tools';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div class='project_card__container' onclick={props.onClick}>
      <div
        class='project_card__photo'
        style={{
          background: `url(${cardImageSize(props.project.photo.card)}) no-repeat scroll center center / cover`,
        }}
      />
      <div class='project_card__border' />
      <h2 class='project_card__title' style={{ color: 'var(--grey)' }}>
        {props.project.title}
      </h2>
    </div>
  );
}
