'use strict';
const Service = require('egg').Service;
const UserRecorder = this.ctx.model.UserRecorder;
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


class UserRecorderService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(UserRecorder, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(UserRecorder, params);
  }

  async create(payload) {
    return _create(UserRecorder, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, UserRecorder, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, UserRecorder, values);
  }

  async update(res, _id, payload) {
    return _update(res, UserRecorder, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, UserRecorder, params)
  }
}
module.exports = UserRecorderService;