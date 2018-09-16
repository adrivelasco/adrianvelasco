const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const history = require('connect-history-api-fallback');
const morgan = require('morgan');
const sanitized = require('express-sanitized');

const Router = require('./Router');

/**
 * Application Express Server
 * @class
 */
class App {
  /**
   * Initialize Express App
   * @param {Object} options - Server configuration
   * @param {String} options.port - Port listenner
   * @param {String} options.port - Mode environment
   */
  constructor({ port, mode }) {
    this.app = express();
    this.port = port;
    this.mode = mode;
    this.router = new Router();

    this.configure();
  }

  /**
   * Configure Application
   */
  configure() {
    this.middlewares();
    this.routing();
  }

  /**
   * Register Nodejs middlewares for Express
   */
  middlewares() {
    global.navigator = global.navigator || {};
    global.navigator.userAgent = global.navigator.userAgent || 'all';

    this.app.disable('x-powered-by');
    this.app.use(sanitized());
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(history());
    this.app.use(compression());

    if (this.mode === 'development') {
      this.app.use(morgan('dev'));
      this.app.enable('trust proxy');
    }
  }

  /**
   * Inject routes to Application
   */
  routing() {
    this.app.use(this.router);
  }

  /**
   * Start server
   * {Function} callback
   */
  start(callback) {
    this.app.listen(this.port, callback);
  }
}

module.exports = App;
