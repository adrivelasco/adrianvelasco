'use strict';

require('dotenv').config();

const App = require('./App');
const config = require('./config');
const { logger } = require('./modules');

const server = new App(config.server);

server.start(() => {
  logger.info(`🚀 Server ready at http://localhost:${config.server.port} (${config.server.mode})`);
});
