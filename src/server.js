import {ApolloServer} from 'apollo-server'
import schema from "./schema";

const PORT = 8999;
const server = new ApolloServer({
  schema
})

server.listen(PORT).then(({url}) => console.log(`Started at url ${url}`));
