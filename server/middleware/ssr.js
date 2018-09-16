const { Renderer } = require('@stencil/core/server');
const fs = require('fs');
const MobileDetect = require('mobile-detect');
const mustache = require('mustache');

const { logger } = require('../modules');

/**
 * Render final Html result middleware
 * @param {Object} options
 * @param {Object} options.config - Stencil configuration
 */
function ssr({ config }) {
  /**
   * Send to response Html markup after stencil compile and mustache render
   */
  return async (req, res, next) => {
    const md = new MobileDetect(req.headers['user-agent']);
    const renderer = new Renderer(config);
    const context = {
      namespace: config.fsNamespace,

      // User's device information
      device: {
        mobile: md.mobile() != null,
        os: md.os(),
        userAgent: md.userAgent()
      },

      // Site configuration
      site: {
        description: 'Javascript & UI/UX Developer',
        favicon: 'favicon.ico',
        id: 1,
        name: 'Adrián Velasco'
      }
    };

    const templateHtml = fs.readFileSync(config.srcIndexHtml, 'utf8');
    const output = mustache.render(templateHtml, {
      namespace: context.namespace,
      site: context.site
    });

    try {
      const results = await renderer.hydrate({
        html: output,
        req: { ...req, path: req.originalUrl }
      });

      results.diagnostics.map(diagnostic => {
        logger.error(diagnostic.messageText);
      });

      res.status(200).send(results.html);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ssr;
