import { closeModal } from '../../store';

import './CloseButton.css';

export function CloseButton() {
  return (
    <button class='close_button__container' onClick={closeModal}>
      <p class='close_button__container'>Close</p>
    </button>
  );
}
