'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _posts = require('../../../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _post = require('../../types/post');

var _post2 = _interopRequireDefault(_post);

var _getProjection = require('../../get-projection');

var _getProjection2 = _interopRequireDefault(_getProjection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PostModel from '../../../models/post';

// const Posts = require('./data/posts');
exports.default = {
  type: _post2.default,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params, options) {
    // const projection = getProjection(options.fieldASTs[0]);

    // return PostModel
    //   .findById(params.id)
    //   .select(projection)
    //   .exec();
    return _posts2.default;
  }
};