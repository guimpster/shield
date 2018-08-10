import { rule, shield, and, or, not, allow, deny } from 'graphql-shield'
import * as R from 'ramda'

const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user !== null)

const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user && ctx.user.role === "admin")

const isEditor = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user && ctx.user.role === "editor")

const options = { allowExternalErrors: true }

export const permissions = shield({
  Query: {
    frontPage: not(isAuthenticated),
    fruits: and(isAuthenticated, or(isAdmin, isEditor)),
    customers: and(isAuthenticated, isAdmin)
  },
  Mutation: {
    addFruitToBasket: isAuthenticated
  },
  Fruit: isAuthenticated,
  Customer: isAdmin
}, options)