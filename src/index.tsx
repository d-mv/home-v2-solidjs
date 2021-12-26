import { render } from 'solid-js/web';
import WebFont from 'webfontloader';
import { App } from './app';
import './index.css';

WebFont.load({
  google: {
    families: ['Rubik:300,400,500', 'Roboto+Slab:300,400'],
  },
});

render(() => <App />, document.getElementById('root') as HTMLElement);
