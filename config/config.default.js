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

  // 防止csrf攻击
  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your middleware config here
  config.middleware = [];

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  }
  // 设置接口超时时间，分钟为单位
  config.timeOut = 30 

  // 使用 nunjuncks 作默认模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    // root: [
    //   path.join(appInfo.baseDir, 'app/view')
    // ].join(','),
    mapping: {
      '.html': 'nunjucks',
    }
  }

  // 链接mongodb
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/oflyecms',  //你的数据库地址，不要端口
      options: {
        useNewUrlParser: true
      }
    }  
  }

  // 链接redis
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: 0
    }
  }

  // 修改端口监听配置
  // config.cluster = {
  //   listen: {
  //     port: 8081
  //   }
  // }

  // add your user config here
  const userConfig = {
    /*
    * @param  {[string]} session_secret   [session 密钥]
    * @param  {[string]} auth_cookie_name   [cookie 标识]
    * @param  {[number]} serverPort   [服务端口号]
    * @param  {[string]} lang   [默认语言]
    * @param  {[string]} languages   [支持语言]
    * @param  {[string]} encrypt_key   [密钥]
    * @param  {[string]} salt_aes_key   [可以解密]
    * @param  {[string]} salt_md5_key   [MD5的盐，用于加密密码]
    * @param  {[string]} encryptApp_key   [iv加密key]
    * @param  {[string]} encryptApp_vi   [iv加密密钥]
    * @param  {[string]} mongo_connection_uri   [mongodb连接信息]
    * @param  {[boolean]} openqn   [打开七牛]
    * @param  {[string]} accessKey   [七牛信息]
    * @param  {[string]} secretKey   [七牛信息]
    * @param  {[string]} bucket   [资源空间名称]
    * @param  {[string]} origin   [cdn域名]
    * @param  {[number]} fsizeLimit   [上传文件大小限制]
    * @param  {[boolean]} openRedis   [使用redis缓存]
    * @param  {[string]} redis_host   [redis主机ip]
    * @param  {[number]} redis_port   [redis端口]
    * @param  {[string]} redis_psd   [redis密码]
    * @param  {[number]} redis_db   [redis db]
    * @param  {[number]} redis_ttl   [超时时间]
    * @param  {[string]} doracms_api   [系统服务提供商]
    * @param  {[string]} system_log_path   [服务器日志保存目录]
    * @param  {[string]} upload_path   [文件上传路径]
    */
    "session_secret": "doracms_secret",
    "auth_cookie_name": "doracms",
    "serverPort": 8080,
    "lang": "zh-CN",
    "languages": [
      "zh-CN",
      "zh-TW",
      "en"
    ],
    "encrypt_key": "dora",
    "salt_aes_key": "doracms_",
    "salt_md5_key": "dora",
    "encryptApp_key": "751f621ea8f930",
    "encryptApp_vi": "26247500048718",
    "mongo_connection_uri": "mongodb://127.0.0.1:27017/oflyecms",
    "openqn": false,
    "accessKey": "ZeS04ItPQVfTJIOgefn2wKC1_njJ62n4yB9ujo",
    "secretKey": "LKK2d1je3AuLrA5JKeRdmWKxKfdnaJqK2JMVm7",
    "bucket": "cmsupload",
    "origin": "https://cdn.html-js.cn",
    "fsizeLimit": 5242880,
    "openRedis": false,
    "redis_host": "127.0.0.1",
    "redis_port": 6379,
    "redis_psd": "hello123",
    "redis_db": 0,
    "redis_ttl": 12,
    "doracms_api": "http://api.html-js.cn",
    "system_log_path": "./logs/",
    "upload_path": "/home/doraData/uploadFiles/doracms2/upload"
  };

  return {
    ...config,
    ...userConfig,
  };
};
