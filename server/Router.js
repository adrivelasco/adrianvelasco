const express = require('express');
const path = require('path');
const stencil = require('@stencil/core/server');

const ssrMiddleware = require('./middleware/ssr');
const errorMiddleware = require('./middleware/error');

const pathResolve = (...args) => path.resolve(__dirname, ...args);

class Router {
  /**
   * @return { Express.Router } - Express router;
   */
  constructor() {
    this.router = express.Router();
    this.stencilConfig = stencil.loadConfig(pathResolve('../'));

    this.configure();

    return this.router;
  }

  /**
   * Return router middleware with all routes
   */
  configure() {
    this.router.use('/static', express.static(pathResolve('../build/static')));

    // Front-End Server Rendering
    this.router.use(
      /^([^.+]|.html)*(\?.*)?$/i,
      ssrMiddleware({
        config: this.stencilConfig
      })
    );

    this.router.use(express.static(pathResolve('../www')));

    this.router.use(errorMiddleware);
  }
}

module.exports = Router;
