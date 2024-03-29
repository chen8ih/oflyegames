'use strict';
const Service = require('egg').Service;
const ContentTag = this.ctx.model.ContentTag;
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


class ContentTagService extends Service {
  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {
    let listdata = _list(ContentTag, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    });
    return listdata;
  }

  async count(params = {}) {
    return _count(ContentTag, params);
  }

  async create(payload) {
    return _create(ContentTag, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, ContentTag, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, ContentTag, values);
  }

  async update(res, _id, payload) {
    return _update(res, ContentTag, _id, payload);
  }

  async item(res, params = {}) {
    return _item(res, ContentTag, params)
  }
}
module.exports = ContentTagService;
