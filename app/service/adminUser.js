'use strict';
const Service = require('egg').Service;
const AdminUser = this.ctx.model.AdminUser;
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


class AdminUserService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(AdminUser, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(AdminUser, params);
  }

  async create(payload) {
    return _create(AdminUser, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, AdminUser, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, AdminUser, values);
  }

  async update(res, _id, payload) {
    return _update(res, AdminUser, _id, payload);
  }

  async item(res, {
    query = {},
    populate = [],
    files = null
  } = {}) {
    return _item(res, AdminUser, {
      files: files ? files : {
        password: 0,
        email: 0
      },
      query: query,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'group',
        select: 'power _id enable name'
      }],
    })
  }
}
module.exports = AdminUserService;
