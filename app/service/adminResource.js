'use strict';

const Service = require('egg').Service;
const AdminResource = this.ctx.model.AdminResource;
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


class AdminResourceService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(AdminResource, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files,
      sort: {
        sortId: 1
      }
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(AdminResource, params);
  }

  async create(payload) {
    return _create(AdminResource, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, AdminResource, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, AdminResource, values);
  }

  async update(res, _id, payload) {
    return _update(res, AdminResource, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, AdminResource, params)
  }
}

module.exports = AdminResourceService;