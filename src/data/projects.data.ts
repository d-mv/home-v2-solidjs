import type { ProjectType } from '../models';

export const PROJECTS: ProjectType[] = [
  {
    title: 'Our Change',
    description: 'Collection of historical places.',
    photo: {
      card: [
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564834311/home/v2/projects/card__our-change.jpg',
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564834311/home/v2/projects/card__our-change_2x.jpg',
      ],
      details: {
        s: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839459/home/v2/projects/details__our-change_s.png',
        m: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839464/home/v2/projects/details__our-change_m.png',
        l: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839480/home/v2/projects/details__our-change_l.png',
        xl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839481/home/v2/projects/details__our-change_xl.png',
        xxl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839490/home/v2/projects/details__our-change_xxl.png',
      },
    },
    details:
      "A social app for citizens to communicate the issues to the municipality. Created for a client as an MVP, the app bears all the required features for posting illustrated mini-posts with optional solutions as well as votes. Municipality can post news, well as post notes to the users' posts, and users can reply to them. Desktop version for analytics, while opening the app from mobile gives full functionality",
    technology: ['react', 'redux', 'Styled Components', 'node', 'express', 'mongo'],
    links: { deployed: 'https://ourchange-dev.herokuapp.com/' },
  },
  {
    title: 'Homepage SPA',
    description: 'Homepage app',
    photo: {
      card: [
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1565386526/home/v2/projects/card__home-app.png',
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1565386526/home/v2/projects/card__home-app_2x.png',
      ],
      details: {
        s: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387703/home/v2/projects/details__homepage-spa_s.png',
        m: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387705/home/v2/projects/details__homepage-spa_m.png',
        l: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387714/home/v2/projects/details__homepage-spa_l.png',
        xl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387718/home/v2/projects/details__homepage-spa_xl.png',
        xxl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387725/home/v2/projects/details__homepage-spa_xxl.png',
      },
    },
    details:
      'At certain point faced the need to make a homepage, which will act as a business card and a showcase. It had to reflect... basically me. From the beginning the decision was made not to use templates and work out something different. The result - you are looking at it. The initial mockup was done in Sketch, the working mockup in HTML/CSS. As main tool I used Vue.js (+ Vuex) with SCSS. To simplify dev process, the project is using JSON file with all the data and links to images on Cloudinary. Favicon designed  in Affinity Designer, while the pack with manifest.json done with Image2icon app. Later if has been reworked from ground in React. Styled Components instead of SCSS and React Icons instead of Font Awesome. TypeScript, auto Dark Mode on macOS.',
    technology: ['solidjs', 'ts', 'css', 'solid icons'],
    links: {
      github: 'https://github.com/d-mv/home-v2',
      deployed: 'https://melnikov.dev',
    },
  },
  {
    title: 'Chaserz',
    description: 'Scooter race web game',
    photo: {
      card: [
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835061/home/v2/projects/card__chaserz.jpg',
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835061/home/v2/projects/card__chaserz_2x.jpg',
      ],
      details: {
        s: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565724155/home/v2/projects/details__chaserz_s.png',

        m: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565724159/home/v2/projects/details__chaserz_m.png',
        l: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565724172/home/v2/projects/details__chaserz_l.png',
        xl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565724170/home/v2/projects/details__chaserz_xl.png',
        xxl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565724176/home/v2/projects/details__chaserz_xxl.png',
      },
    },
    details:
      'The app was developed as a part of Le Wagon Bootcamp (batch #209) with my colleague Roni Talvi. It is a browser based race game for scooter owners which combines online and real-life experience. This project has been done as proof of concept. Main trick was to collect geodata from the racers at the server and broadcast it to them back, so each can see the position of others on the map. The initial design done in Figma, then mockup in HTML/CSS. Some graphics done in Affinity Designer/Photo. The technology used - Ruby, Rails, ActionCable, SCSS, MapBox API, GPS geopositioning and JS.',
    technology: ['ruby', 'rails', 'scss', 'mapbox', 'heroku'],
    links: {
      github: 'https://github.com/d-mv/chaserz',
      deployed: 'https://chaserz-dev.herokuapp.com/',
      video: 'https://drive.google.com/open?id=1M2lTK6MzgQAMx-YspqgrFs9foKKw-lyC',
    },
  },
  {
    title: 'The Newsletter',
    description: 'Newspaper-style RSS reader app',
    photo: {
      card: [
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1565381986/home/v2/projects/card__newsletter.jpg',
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1565381986/home/v2/projects/card__newsletter_2x.jpg',
      ],
      details: {
        s: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384292/home/v2/projects/details__newslettter_s.png',
        m: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384298/home/v2/projects/details__newslettter_m.png',
        l: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384302/home/v2/projects/details__newslettter_l.png',

        xl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384302/home/v2/projects/details__newslettter_xl.png',
        xxl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384304/home/v2/projects/details__newslettter_xxl.png',
      },
    },
    details:
      'With too many bright colours, moving elements and over-use of font weights and sizes, rather hard to focus on the information.  Currently, as a proof of concept parser is set to work with Medium blogs, which are overloaded with large graphics and distracting elements. This has been a pet project from the beginning. Started as RoR and later with Hanami, with PostgreSQL and  later dropped them in favour of React/Redux and SCSS for front and Node.js with Express and MongoDB for back. In the process of further upgrade to TypeScript, rework of backend methods in favor of simplicity and speed, as well as a pending full overhaul of front',
    technology: ['react', 'redux', 'Styled Components', 'ts', 'mongo', 'node', 'express', 'scss'],
    links: {
      github: 'https://github.com/d-mv/newsletter-single',
      deployed: 'http://the-newsletter-app.herokuapp.com/',
    },
  },
  {
    title: 'GulfHeritage.me',
    description: 'Collection of historical places.',
    photo: {
      card: [
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835123/home/v2/projects/card__gulf-heritage.jpg',
        'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835123/home/v2/projects/card__gulf-heritage_2x.jpg',
      ],
      details: {
        s: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565597104/home/v2/projects/details__heritage_s.png',
        m: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565597108/home/v2/projects/details__heritage_m.png',
        l: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565597110/home/v2/projects/details__heritage_l.png',
        xl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565597117/home/v2/projects/details__heritage_xl.png',
        xxl: 'https://res.cloudinary.com/diciu4xpu/image/upload/v1565597122/home/v2/projects/details__heritage_xxl.png',
      },
    },
    details:
      'The idea was to create a web-site with collection of historical place in the Gulf region - mainly UAE, with later addtion of other countries. The information included photos, articles, locations. The project was based purely on HTML/CSS, with few JS libraries for showing photos.',
    technology: ['html', 'css'],
    links: {},
  },
];
