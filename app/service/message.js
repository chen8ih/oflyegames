'use strict';
const Service = require('egg').Service;
const Message = this.ctx.model.Message;
const _ = require('lodash')
const {
  _list,
  _item,
  _count,
  _create,
  _update,
  _removes,
  _safeDelete
} = require('./general');

class MessageService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(Message, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'contentId',
        select: 'title stitle _id'
      }, {
        path: 'author',
        select: 'userName _id enable date logo'
      }, {
        path: 'replyAuthor',
        select: 'userName _id enable date logo'
      }, {
        path: 'adminAuthor',
        select: 'userName _id enable date logo'
      }, {
        path: 'adminReplyAuthor',
        select: 'userName _id enable date logo'
      }],
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(Message, params);
  }

  async create(payload) {
    return _create(Message, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, Message, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, Message, values);
  }

  async update(res, _id, payload) {
    return _update(res, Message, _id, payload);
  }

  async item(res, {
    query = {},
    populate = [],
    files = null
  } = {}) {
    return _item(res, Message, {
      query: query,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'contentId',
        select: 'title stitle _id'
      }, {
        path: 'author',
        select: 'userName _id enable date logo'
      }, {
        path: 'replyAuthor',
        select: 'userName _id enable date logo'
      }, {
        path: 'adminAuthor',
        select: 'userName _id enable date logo'
      }, {
        path: 'adminReplyAuthor',
        select: 'userName _id enable date logo'
      }],
      files
    })
  }
}

module.exports = MessageService;
