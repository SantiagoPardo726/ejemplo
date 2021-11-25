const host = 'localhost';
const port = '8080';
const appName = 'frontstepbystep-api';
const rootApi = 'api';

export const environment = {
  production: false,
  baseUrl: `http://${host}:${port}/${appName}/${rootApi}/`
};
