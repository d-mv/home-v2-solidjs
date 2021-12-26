import { For } from 'solid-js';
import './ProjectLinks.css';

export interface ProjectLinksProps {
  links: Record<string, string>;
}

export function ProjectLinks(props: ProjectLinksProps) {
  return (
    <div class='project_links__container'>
      <For each={Object.keys(props.links)}>
        {(link: string) => (
          <a class='project_links__link' target='_blank' rel='noopener noreferrer nofollow' href={props.links[link]}>
            <span class='underline'>{link}</span>
          </a>
        )}
      </For>
    </div>
  );
}
