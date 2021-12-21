const babelJest = require('babel-jest')
const chalk = require('chalk')

module.exports = babelJest.createTransformer({
  babelrc: false,
  configFile: false,

  // This should match the paths.appSrc 'babel-loader' options.preset in webpack.config.dev.js
  presets: [ './config/babel.app.config.js' ],

  plugins: [
    // Enable fancy logging that uses chalk to make console output colorful
    [
      './babel-plugin/fancy-console',
      {
        loggers: [
          {
            object: 'console',
            methods: ['log', 'info', 'warn', 'error'],
            enhancements: {
              log: [chalk.bold.white.bgHex('#21409a')(' debug ')],
              info: [chalk.bold.white.bgHex('#01acac')(' info ')],
              warn: [chalk.bold.white.bgHex('#f8a51b')(' warn ')],
              error: [chalk.bold.white.bgHex('#ed403c')(' error ')],
            },
          },
        ],
      },
    ],
  ]

})
