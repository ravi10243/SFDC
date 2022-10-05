const baseConfig =  require('../../config/jest.base.config');

module.exports = Object.assign({},
  baseConfig,
  {
    testMatch: [ "**/(unit|jest)/**/?(*.)+(spec|test).[t]s?(x)" ],
  }
);
