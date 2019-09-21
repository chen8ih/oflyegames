/**
 * Created by Administrator on 2015/9/28.
 * 系统操作日志
 */
const shortid = require('shortid');
const datefns = require('date-fns');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const SystemOptionLogSchema = new Schema({
    _id: {
      type: String,
  
      'default': shortid.generate
    },
    type: String, //login:登录 exception:异常
    date: { type: Date, default: Date.now },
    logs: String
  });
  
  SystemOptionLogSchema.statics = {
  
  
  }
  
  SystemOptionLogSchema.set('toJSON', { getters: true, virtuals: true });
  SystemOptionLogSchema.set('toObject', { getters: true, virtuals: true });
  
  SystemOptionLogSchema.path('date').get(function (v) {
    return datefns.format(v, "YYYY-MM-DD HH:mm:ss");
  });

  return mongoose.model("SystemOptionLog", SystemOptionLogSchema);
}
