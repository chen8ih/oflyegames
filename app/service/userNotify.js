'use strict';
const Service = require('egg').Service;
const UserNotify = this.ctx.model.UserNotify;
const _ = require('lodash')
const {
  _list,
  _item,
  _count,
  _create,
  _update,
  _removes,
  _safeDelete,
  _updateMany
} = require('./general');


class UserNotifyService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(UserNotify, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(UserNotify, params);
  }

  async create(payload) {
    return _create(UserNotify, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, UserNotify, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, UserNotify, values);
  }

  async update(res, _id, payload) {
    return _update(res, UserNotify, _id, payload);
  }

  async updateMany(res, ids, payload, params) {
    return _updateMany(res, UserNotify, ids, payload, params);
  }

  async item(res, params = {}) {
    return _item(res, UserNotify, params)
  }
}
module.exports = UserNotifyService;
