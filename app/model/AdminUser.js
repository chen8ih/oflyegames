'use strict';
/**
 * Created by Administrator on 2015/4/15.
 * 管理员对象
 */
const shortid = require('shortid')
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const AdminUserSchema = new Schema({
    id: String,
    _id: {
      type: String,
      'default': shortid.generate
    },
    name: String,
    userName: String,
    password: String,
    email: String,
    phoneNum: String,
    countryCode: {
      type: String
    }, // 手机号前国家代码
    comments: String,
    date: {
      type: Date,
      default: Date.now
    },
    logo: {
      type: String,
      default: "/upload/images/defaultlogo.png"
    },
    enable: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: '1' // 1正常，0删除
    },
    auth: {
      type: Boolean,
      default: false
    },
    group: {
      type: String,
      ref: 'AdminGroup'
    }
  })
  AdminUserSchema.statics = {
    getOneItem: function (res, targetId, callBack) {
      AdminUser.findOne({
        '_id': targetId
      }).populate('group').exec(function (err, user) {
        if (err) {
          res.end(err);
        }
        callBack(user);
      })
    }
  };
  return mongoose.model('AdminUser', AdminUserSchema)
}
