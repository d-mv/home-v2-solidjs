import { PHOTOS } from '../../data';
import { photo } from '../../store';

import './PhotoBanner.css';

export function PhotoBanner() {
  return (
    <div
      class='photo_banner__container'
      style={{
        background: `#000 url(${PHOTOS[photo()].large}) no-repeat scroll center center /
		cover`,
      }}
    >
      <section class='photo_banner__details'>
        <p class='photo_banner__title'>{PHOTOS[photo()].title}</p>
        <p class='photo_banner__location'>{PHOTOS[photo()].location}</p>
      </section>
    </div>
  );
}
