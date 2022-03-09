export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      allCards: '/CarteMagic',
      oneCard: '/CarteMagic/:id',
      filterByName: '/api/employe/name/:name'
    }
  }
};
