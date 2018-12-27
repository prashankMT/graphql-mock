// This example demonstrates a simple server with some relational data: Posts and Authors. You can get the posts for a particular author,
// and vice-versa Read the complete docs for graphql-tools here: http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
import {gql} from 'apollo-server'
import { makeExecutableSchema, addMockFunctionsToSchema, mergeSchemas } from "graphql-tools";

import {
  schema as recordingsSchema,
  mock as recordingsMock,
  resolvers as recordingsResolvers
} from "./recordings";

import { merge } from "lodash";

const baseSchema = [
  gql`
    type Query {
        domain: String
    }
    type Mutation {
        domain: String
    }
    schema {
      query: Query,
      mutation: Mutation
      subscription: Subscription
    }
    `
];

// Put schema together into one array of schema strings and one map of resolvers, like makeExecutableSchema expects
const schema = [...baseSchema, ...recordingsSchema];

const options = {
  typeDefs: schema,
  resolvers: recordingsResolvers
};

const executableSchema = makeExecutableSchema(options);

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: { ...recordingsMock },
  preserveResolvers: true
});

export default executableSchema;
