import { Message } from '..';
import './Home.css';

export function Home() {
  return (
    <div class='home_content'>
      <div class='home_column'>
        <Message />
      </div>
      <div class='home_column'>
        <div
          class='home_photo'
          style={{
            height: `${String(window.innerHeight / 12)}rem`,
            background: `#000 url(https://res.cloudinary.com/diciu4xpu/image/upload/v1565120083/home/v2/home/avatar.jpg) no-repeat scroll center center /cover`,
          }}
        />
      </div>
    </div>
  );
}
