/**
 * Created by Administrator on 2015/4/15.
 * 文章标签对象
 */
const shortid = require('shortid');
const datefns = require('date-fns');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ContentTagSchema = new Schema({
    _id: {
      type: String,
      'default': shortid.generate
    },
    name: String,
    alias: String, //别名
    date: { type: Date, default: Date.now },
    comments: String
  });
  
  ContentTagSchema.set('toJSON', { getters: true, virtuals: true });
  ContentTagSchema.set('toObject', { getters: true, virtuals: true });
  
  ContentTagSchema.path('date').get(function (v) {
    return datefns.format(v, "YYYY-MM-DD HH:mm:ss");
  });
  return mongoose.model("ContentTag", ContentTagSchema);
}
