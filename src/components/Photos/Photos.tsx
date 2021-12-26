import { PhotoBanner, PhotoBelt } from '..';
import './Photos.css';

export function Photos() {
  return (
    <div class='photos__container'>
      <PhotoBanner />
      <PhotoBelt />
    </div>
  );
}
