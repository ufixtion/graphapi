import * as typeDefs from './schema.gql';
import scalarResolver from './scalars/resolver';
import listResolver from './interfaces/list/resolver';
import queryResolver from './schemas/query/resolver';
import storyResolver from './schemas/story/resolver';
import userResolver from './schemas/user/resolver';


const resolvers = [
  queryResolver,
  scalarResolver,
  listResolver,
  storyResolver,
  userResolver
]

export {
  typeDefs,
  resolvers
}