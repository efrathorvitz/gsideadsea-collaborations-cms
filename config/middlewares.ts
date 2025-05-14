import { Strapi } from '@strapi/strapi';

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
      enabled: true,
      origin: ['*'], // אפשר להחליף עם כתובת ספציפית אם צריך
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
