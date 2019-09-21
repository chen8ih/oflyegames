'use strict';
const Service = require('egg').Service;
const HelpCenter = this.ctx.model.HelpCenter;
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


class HelpCenterService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(HelpCenter, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(HelpCenter, params);
  }

  async create(payload) {
    return _create(HelpCenter, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, HelpCenter, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, HelpCenter, values);
  }

  async update(res, _id, payload) {
    return _update(res, HelpCenter, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, HelpCenter, params)
  }
}
module.exports = HelpCenterService;
