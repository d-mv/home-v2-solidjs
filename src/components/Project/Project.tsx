import { CloseButton, ProjectHeader, ProjectLinks, TechStack } from '..';
import { project } from '../../store';
import { imageSize } from '../../tools';
import './Project.css';

export function Project() {
  const selectedProject = project();

  if (!selectedProject) return <></>;

  const { technology, details, links, photo, title } = selectedProject;

  return (
    <div class='project__container'>
      <ProjectHeader title={title} />
      {window.innerWidth < 420 && <CloseButton />}
      <div class='project__content'>
        <div class='project__column' style={{ width: '30%', 'justify-content': 'space-around' }}>
          <TechStack technology={technology} />
          <article class='project__description'>{details}</article>
          <ProjectLinks links={links} />
        </div>
        <div class='project__column' style={{ width: '65%' }}>
          <div
            class='project__photo'
            style={{
              background: `rgba(0,0,0,0) url(${imageSize(photo.details)}) no-repeat scroll center center /
		contain`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
