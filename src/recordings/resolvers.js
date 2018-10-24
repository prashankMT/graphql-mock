import { MockList } from "graphql-tools";
import { categories, libraries } from "./dataSource";

const rootResolvers = {
  Query: {
    categories: () => categories,
    topLibraries: () => libraries.slice(0, 4),
    accounts: (_, { count }) => ({
      data: () => new MockList([1, count])
    }),
    participants: (_, { count }) => ({
      data: () => new MockList([1, count])
    }),
    themes: (_, { count }) => ({
      data: () => new MockList([1, count])
    }),
    participants: (_, { count }) => ({
      data: () => new MockList([1, count])
    })
  },
  Mutation: {}
};

export default rootResolvers;
