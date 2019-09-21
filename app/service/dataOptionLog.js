'use strict';
const Service = require('egg').Service;
const DataOptionLog = this.ctx.model.DataOptionLog;
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


class DataOptionLogService extends Service {
  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {
    let listdata = _list(DataOptionLog, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;
  }


  async count(params = {}) {
    return _count(DataOptionLog, params);
  }

  async create(payload) {
    return _create(DataOptionLog, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, DataOptionLog, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, DataOptionLog, values);
  }

  async update(res, _id, payload) {
    return _update(res, DataOptionLog, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, DataOptionLog, params)
  }
}
module.exports = DataOptionLogService;
