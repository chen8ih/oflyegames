'use strict';
const Service = require('egg').Service;
const TemplateItems = this.ctx.model.TemplateItems;
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


class TemplateItemsService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(TemplateItems, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(TemplateItems, params);
  }

  async create(payload) {
    return _create(TemplateItems, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, TemplateItems, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, TemplateItems, values);
  }

  async update(res, _id, payload) {
    return _update(res, TemplateItems, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, TemplateItems, params)
  }


}

module.exports = TemplateItemsService;