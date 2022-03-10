export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '8080',
    endpoints: {
      allCards: '/CarteMagic/',
      oneCard: '/CarteMagic/:id',
      filterByName: '/api/employe/name/:name'
    }
  }
};
