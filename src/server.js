import express from 'express'
import {ApolloServer} from 'apollo-server'
import schema from "./schema";
import {publish} from './recordings/resolvers'

// https://github.com/apollographql/apollo-server/issues/1638
const PORT = 8999;
const server = new ApolloServer({
  schema
})

const app = express()

setInterval(publish, 5000)

server.listen(PORT).then(({url}) => console.log(`Started at url ${url}`));
