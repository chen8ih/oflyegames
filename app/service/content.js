'use strict';
const Service = require('egg').Service;
const Content = this.ctx.model.Content;
const _ = require('lodash')
const {
  _list,
  _item,
  _count,
  _create,
  _update,
  _removes,
  _safeDelete,
  _updateMany,
  _inc,
} = require('./general');


class ContentService extends Service {

  async find(payload, {
    sort = {
      date: -1
    },
    query = {},
    searchKeys = [],
    populate = [],
    files = null
  } = {}) {

    let listdata = _list(Content, payload, {
      files: files,
      query: query,
      searchKeys: searchKeys,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'author',
        select: 'userName _id id logo'
      },
      {
        path: 'uAuthor',
        select: 'userName name logo _id group'
      },
      {
        path: 'tags',
        select: 'name _id'
      },
      {
        path: 'categories',
        select: 'name _id contentTemp enable defaultUrl',
        populate: {
          path: 'contentTemp'
        }
      }
      ],
      sort: sort
    });

    return listdata;

  }


  async count(params = {}) {
    return _count(Content, params);
  }

  async create(payload) {
    return _create(Content, payload);
  }

  async removes(res, values, key = '_id') {
    return _removes(res, Content, values, key);
  }

  async safeDelete(res, values) {
    return _safeDelete(res, Content, values);
  }

  async update(res, _id, payload) {
    return _update(res, Content, _id, payload);
  }

  async inc(res, _id, payload) {
    return _inc(res, Content, _id, payload);
  }

  async updateMany(res, ids, payload) {
    return _updateMany(res, Content, ids, payload);
  }

  async item(res, {
    query = {},
    populate = [],
    files = null
  } = {}) {
    return _item(res, Content, {
      files: files,
      query: query,
      populate: !_.isEmpty(populate) ? populate : [{
        path: 'author',
        select: 'userName _id id logo'
      },
      {
        path: 'uAuthor',
        select: 'userName name logo _id group'
      },
      {
        path: 'tags',
        select: 'name _id'
      },
      {
        path: 'categories',
        select: 'name _id contentTemp enable defaultUrl',
        populate: {
          path: 'contentTemp'
        }
      }
      ],

    })
  }
}
module.exports = ContentService;