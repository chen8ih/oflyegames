/**
 * Created by Administrator on 2015/4/15.
 * 系统模板对象
 */
const shortid = require('shortid');
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ContentTemplateSchema = new Schema({
    _id: {
      type: String,
      'default': shortid.generate
    },
    name: String,
    alias: { type: String, default: "defaultTemp" }, //别名 指向模板文件夹
    version: String,
    items: [{ type: String, ref: 'TemplateItems' }],
    sImg: { type: String, default: '/stylesheets/backstage/img/screenshot.png' },
    author: { type: String, default: "doramart" }, // 主题作者
    using: { type: Boolean, default: false }, // 是否被启用
    date: { type: Date, default: Date.now },
    comment: String // 主题描述
  });
  
  ContentTemplateSchema.statics = {
    setTempState: function (tempId, state, callBack) {
      if (state) {
        ContentTemplate.findOneAndUpdate({ '_id': tempId }, { $set: { 'using': true } }, callBack)
      } else {
        ContentTemplate.update({}, { $set: { 'using': false } }, { multi: true }, callBack)
      }
    },
    getDefaultTemp: function (res, callBack) {
      ContentTemplate.findOne({ 'using': true }).populate('items').exec(function (err, doc) {
        if (err) {
          res.end(err);
        } else {
          callBack(doc);
        }
      });
    }
  };
  return mongoose.model("ContentTemplate", ContentTemplateSchema);
}
