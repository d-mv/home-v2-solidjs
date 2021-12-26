import { createSignal } from 'solid-js';
import { ArrowButton } from '..';
import { PHOTOS } from '../../data';
import type { Photo } from '../../models';
import { setPhoto } from '../../store';

import './PhotoBelt.css';

export function PhotoBelt() {
  const [left, setLeft] = createSignal(0);

  function calcIndex(index: number) {
    return index >= left() && index < left() + 5;
  }

  const handleArrowClick = (mode: string) => {
    if (mode === 'minus') {
      if (left() - 1 >= 0) setLeft(left() - 1);
    } else if (left() + 5 < PHOTOS.length) setLeft(left() + 1);
  };

  function handlePhotoOnClick(index: number) {
    return function call() {
      setPhoto(index);
    };
  }

  function renderPhotos() {
    return PHOTOS.map(
      (photo: Photo, index: number) =>
        calcIndex(index) && (
          <a
            class='photo_belt__card'
            title={`${photo.title}\n${photo.location}`}
            style={{
              background: `#00000000 url(${photo.thumb}) no-repeat scroll center center /
		cover`,
            }}
            onclick={handlePhotoOnClick(index)}
          />
        ),
    );
  }

  return (
    <section class='photo_belt__container'>
      <ArrowButton left onClick={handleArrowClick} />
      {renderPhotos()}
      <ArrowButton right onClick={handleArrowClick} />
    </section>
  );
}
