'use strict';
const Service = require('egg').Service;
const AdminGroup = this.ctx.model.AdminGroup;
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


class AdminGroupService extends Service {
  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {
    let listdata = _list(AdminGroup, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;
  }


  async count(params = {}) {
    return _count(AdminGroup, params);
  }

  async create(payload) {
    return _create(AdminGroup, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, AdminGroup, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, AdminGroup, values);
  }

  async update(res, _id, payload) {
    return _update(res, AdminGroup, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, AdminGroup, params)
  }
}

module.exports = AdminGroupService
