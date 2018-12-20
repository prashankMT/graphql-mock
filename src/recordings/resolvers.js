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
      data: () => new MockList([5, count])
    }),
    recordings: (_, { count }) => ({
      data: () => new MockList([8, 10])
    }),
    libraries: (_, {count}) => ({
      data: () => new MockList([1, count])
    }),
    comments: (_, {count}) => ({
      data: () => new MockList([6, 20])
    })
  },
  Mutation: {}
};

export default rootResolvers;
