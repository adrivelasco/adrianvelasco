import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { DevServerConfig } from '@stencil/core/dist/declarations';

export const config: Config = {
  namespace: 'adrianvelasco',
  srcDir: 'client',
  plugins: [
    postcss({
      plugins: [
        require('postcss-global-import')(),
        require('postcss-import')(),
        require('postcss-custom-properties')(),
        require('postcss-custom-media')(),
        require('postcss-media-minmax')(),
        require('postcss-custom-selectors')(),
        require('postcss-calc')(),
        require('postcss-advanced-variables')(),
        require('postcss-nesting')(),
        require('postcss-nested')(),
        require('postcss-color-function')(),
        require('postcss-hexrgba')(),
        require('pleeease-filters')(),
        require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
        require('postcss-flexbugs-fixes')(),
        require('postcss-simple-vars')(),
        require('postcss-mixins')(),
        require('postcss-extend')(),
        require('autoprefixer')({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9'
          ]
        })
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'client/sw.js'
      }
    }
  ]
};

export const devServer: DevServerConfig = {
  root: 'www'
};
