'use strict';

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js

/*  
    Required modules {express and express-graphql} 
    will be imported along with the schema object
    from the schema.js file in src/schema.js 
*/

var express = require('express');
var graphqlHTTP = require('express-graphql');


var port = process.env.PORT || 3000;
var app = express();
app.use('/', graphqlHTTP({
    schema: _graphql2.default,
    graphiql: true //set to false if you don't want graphiql enabled
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);