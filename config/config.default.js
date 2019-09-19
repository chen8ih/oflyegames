/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568807531719_2692';

  // add your middleware config here
  config.middleware = [];

  // 链接mongodb
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/wgtest',  //你的数据库地址，不要端口
      options: {
        useNewUrlParser: true
      }
    }  
  }

  // 链接redis
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
