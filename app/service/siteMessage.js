'use strict';
const Service = require('egg').Service;
const SiteMessage = this.ctx.model.SiteMessage;
const _ = require('lodash')

const {
  _list,
  _item,
  _count,
  _create,
  _update,
  _removes,
  _safeDelete,
  _updateMany
} = require('./general');

class SiteMessageService extends Service {

  async find(payload, {
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(SiteMessage, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'activeUser',
        select: getAuthUserFields('base')
      }, {
        path: 'passiveUser',
        select: getAuthUserFields()
      }, {
        path: 'content',
        select: 'title _id'
      }, {
        path: 'message',
        select: 'content _id contentId',
        populate: {
          path: 'contentId',
          select: 'title _id date'
        }
      }],
      files
    });
    return listdata;

  }


  async count(params = {}) {
    return _count(SiteMessage, params);
  }

  async create(payload) {
    return _create(SiteMessage, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, SiteMessage, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, SiteMessage, values);
  }

  async update(res, _id, payload) {
    return _update(res, SiteMessage, _id, payload);
  }

  async updateMany(res, ids, payload, params) {
    return _updateMany(res, SiteMessage, ids, payload, params);
  }

  async item(res, params = {}) {
    return _item(res, SiteMessage, params)
  }


}

module.exports = SiteMessageService;