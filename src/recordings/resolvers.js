import { MockList } from "graphql-tools";
import { categories, libraries } from "./dataSource";

const rootResolvers = {
  Query: {
    categories: () => categories,
    topLibraries: () => libraries.slice(0, 40),
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
    }),
    users: (_, {count}) => ({
      data: () => new MockList([1, count])
    }),
    recordings: (_, { count }) => ({
      data: () => new MockList([1, count])
    }),
    libraries: (_, {count}) => ({
      data: () => new MockList([1, count])
    })
  },
  Mutation: {}
};

export default rootResolvers;
