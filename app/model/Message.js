/**
 * Created by Administrator on 2015/4/15.
 * 留言管理
 */
var mongoose = require('mongoose');
const shortid = require('shortid');
const datefns = require('date-fns');
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const MessageSchema = new Schema({
    _id: {
      type: String,
      'default': shortid.generate
    },
    contentId: {
      type: String,
      ref: 'Content'
    }, // 留言对应的内容ID
    contentTitle: String, // 留言对应的内容标题
    author: {
      type: String,
      ref: 'User'
  
    },  // 留言者ID
    adminAuthor: {
      type: String,
      ref: 'AdminUser'
  
    },// 管理员ID
    replyAuthor: {
      type: String,
      ref: 'User'
    },   // 被回复者ID
    adminReplyAuthor: {
      type: String,
      ref: 'AdminUser'
    },   // 被回复者ID
    state: { type: Boolean, default: false }, // 是否被举报
    utype: { type: String, default: '0' }, // 评论者类型 0,普通用户，1,管理员
    relationMsgId: String, // 关联的留言Id
    date: { type: Date, default: Date.now }, // 留言时间
    praise_num: { type: Number, default: 0 }, // 被赞次数
    had_praise: { type: Boolean, default: false }, //  当前是否已被点赞
    praiseMembers: String, // 点赞用户id集合
    content: { type: String, default: "输入评论内容..." }// 留言内容
  });
  
  MessageSchema.index({ contentId: 1 }); // 添加索引
  
  MessageSchema.set('toJSON', { getters: true, virtuals: true });
  MessageSchema.set('toObject', { getters: true, virtuals: true });
  
  MessageSchema.path('date').get(function (v) {
    return datefns.format(v, "YYYY-MM-DD HH:mm:ss");
  });

  return mongoose.model("Message", MessageSchema);
}
