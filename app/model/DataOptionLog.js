/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
const shortid = require('shortid');
const datefns = require('date-fns');
module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema;
  const DataOptionLogSchema = new Schema({
    _id: {
      type: String,
      'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
    fileName: { type: String },
    path: { type: String },
    logs: String
  });
  
  DataOptionLogSchema.set('toJSON', { getters: true, virtuals: true });
  DataOptionLogSchema.set('toObject', { getters: true, virtuals: true });
  
  DataOptionLogSchema.path('date').get(function (v) {
    return datefns.format(v, "YYYY-MM-DD HH:mm:ss");
  });
  return mongoose.model("DataOptionLog", DataOptionLogSchema);
}
