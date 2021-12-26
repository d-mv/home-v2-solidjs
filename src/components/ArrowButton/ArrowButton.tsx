import { FiChevronLeft, FiChevronRight } from 'solid-icons/fi';
import './ArrowButton.css';

interface ArrowButtonProps {
  left?: boolean;
  right?: boolean;
  onClick: (arg0: string) => void;
}

export function ArrowButton(props: ArrowButtonProps) {
  function handleOnclick() {
    props.onClick(props.left ? 'minus' : 'plus');
  }

  return (
    <button class='arrow_button__container' onClick={handleOnclick}>
      {props.left ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
