const { GraphQLSchema } = require('graphql');
const query = require('./querySchema')
const mutation = require('./mutationSchema')

module.exports = new GraphQLSchema({query, mutation})