'use strict';
const Service = require('egg').Service;
const SystemOptionLog = this.ctx.model.SystemOptionLog;
const _ = require('lodash')

const {
  _list,
  _item,
  _count,
  _create,
  _update,
  _removes,
  _safeDelete,
  _removeAll
} = require('./general');


class SystemOptionLogService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(SystemOptionLog, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(SystemOptionLog, params);
  }

  async create(payload) {
    return _create(SystemOptionLog, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, SystemOptionLog, values, key);
  }

  async removeAll() {
    return _removeAll(SystemOptionLog);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, SystemOptionLog, values);
  }

  async update(res, _id, payload) {
    return _update(res, SystemOptionLog, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, SystemOptionLog, params)
  }


}

module.exports = SystemOptionLogService;