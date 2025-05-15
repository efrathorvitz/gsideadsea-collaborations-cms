const middleware = [
  {
    name: 'strapi::logger',
    config: {
      level: 'info',
    },
  },
  {
    name: 'strapi::errors',
    config: {},
  },
  {
    name: 'strapi::security',
    config: {},
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5173',
        'https://dead-sea-observatory.vercel.app',
        'https://dead-sea-observatory-lensky-efrat-miryams-projects-897a077f.vercel.app',
        'https://dead-sea-obse-git-cc1aa8-lensky-efrat-miryams-projects-897a077f.vercel.app',
        'https://dead-sea-observatory-54xzxv63e.vercel.app',
      ],      
      headers: '*',
      methods: ['GET'],
      credentials: true,
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {},
  },
  {
    name: 'strapi::query',
    config: {},
  },
  {
    name: 'strapi::body',
    config: {},
  },
  {
    name: 'strapi::session',
    config: {},
  },
  {
    name: 'strapi::favicon',
    config: {},
  },
  {
    name: 'strapi::public',
    config: {},
  },
];

export default middleware;
