'use strict';
const Service = require('egg').Service;
const VersionManage = this.ctx.model.VersionManage;
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


class VersionManageService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(VersionManage, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(VersionManage, params);
  }

  async create(payload) {
    return _create(VersionManage, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, VersionManage, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, VersionManage, values);
  }

  async update(res, _id, payload) {
    return _update(res, VersionManage, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, VersionManage, params)
  }
}
module.exports = VersionManageService;