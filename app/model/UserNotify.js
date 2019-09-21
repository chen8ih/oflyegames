'use strict';
/**
 * Created by Administrator on 2015/4/15.
 * 文章标签对象
 */
const shortid = require('shortid');
const datefns = require('date-fns');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserNotifySchema = new Schema({
    _id: {
      type: String,
      'default': shortid.generate
    },
    isRead: { type: Boolean, default: false },
    user: { type: String, ref: 'User' },  // 用户消息所属者
    systemUser: { type: String, ref: 'AdminUser' },  // 用户消息所属者
    notify: { type: String, ref: 'Notify' },   // 关联的Notify
    date: { type: Date, default: Date.now }
  });
  
  UserNotifySchema.set('toJSON', { getters: true, virtuals: true });
  UserNotifySchema.set('toObject', { getters: true, virtuals: true });
  
  UserNotifySchema.path('date').get(function (v) {
    return datefns.format(v, "YYYY-MM-DD HH:mm:ss");
  });
  
  UserNotifySchema.index({ date: -1 });

  return mongoose.model("UserNotify", UserNotifySchema);
}
