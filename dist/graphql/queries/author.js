'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _authors = require('../../data/authors');

var _authors2 = _interopRequireDefault(_authors);

var _author = require('../types/author');

var _author2 = _interopRequireDefault(_author);

var _getProjection = require('../get-projection');

var _getProjection2 = _interopRequireDefault(_getProjection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _author2.default,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params, options) {
    // const projection = getProjection(options.fieldASTs[0]);

    // return BlogPostModel
    //   .findById(params.id)
    //   .select(projection)
    //   .exec();
    return _authors2.default[0];
  }
};