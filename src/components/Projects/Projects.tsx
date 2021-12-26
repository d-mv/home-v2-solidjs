import clsx from 'clsx';
import { ProjectCard } from '..';
import { PROJECTS } from '../../data';
import type { ProjectType } from '../../models';
import { project, setProject } from '../../store';
import { ifTrue } from '../../tools';
import './Projects.css';

export function Projects() {
  function handleOnClick(prj: ProjectType) {
    return function call() {
      setProject(prj);
    };
  }

  function renderProject(prj: ProjectType) {
    return <ProjectCard project={prj} onClick={handleOnClick(prj)} />;
  }

  return (
    <div class={clsx('projects_container', ifTrue(!!project(), 'projects_modal_is_open'))}>
      {PROJECTS.map(renderProject)}
    </div>
  );
}
