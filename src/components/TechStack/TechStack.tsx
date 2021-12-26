import { TECHNOLOGY } from '../../data';
import type { Option } from '../../models';
import './TechStack.css';
import { capitalize } from '../../tools';

interface TechStackProps {
  technology: Option<string[]>;
}

export function TechStack(props: TechStackProps) {
  if (!props.technology) return <></>;

  function renderStackIcon(el: string, index: number) {
    return (
      <div
        class='tech_stack__icon'
        title={capitalize(el)}
        style={{
          background: `url(${TECHNOLOGY[el][0]}) no-repeat scroll center center /
		contain`,
          'animation-delay': `${index * 0.1}s`,
        }}
      />
    );
  }

  return <div class='tech_stack__container'>{props?.technology.map(renderStackIcon)}</div>;
}
