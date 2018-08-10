import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { ApolloServer } from 'apollo-server'

import { permissions } from './permissions'
import resolvers from './resolvers'
import { getUser } from './faker'

import typeDefs from './schema.graphql'

const schemaWithMiddleware = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  permissions
)

const Server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => ({
    ...req,
    user: getUser(req)
  })
})

const options = { port: 4000 }

Server.listen(options).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
}).catch((e) => {
  console.error(e)
})