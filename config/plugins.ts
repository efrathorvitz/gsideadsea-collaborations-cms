export default () => ({
    cors: {
      enabled: true,
      origin: [
        'http://localhost:5173',
        'https://dead-sea-observatory.vercel.app',
      ],
    },
  });
  