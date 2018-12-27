import {PubSub} from 'apollo-server'
import { MockList } from "graphql-tools";
import { categories, libraries } from "./dataSource";

const pubsub = new PubSub()

const SEND_NOTIFICATION = 'send-notification'

export const publish = () => pubsub.publish(SEND_NOTIFICATION)

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
      data: () => new MockList([count, count])
    }),
    recordings: (_, { count }) => ({
      data: () => new MockList([8, 10])
    }),
    libraries: (_, {count}) => ({
      data: () => new MockList([1, count])
    }),
    comments: (_, {count}) => ({
      data: () => new MockList([6, 20])
    }),
    notifications: (_, {count}) => ({
      data: () => new MockList([1, count])
    })
  },
  Mutation: {},
  Subscription: {
    newNotificationRecieved: {
      subscribe: () => pubsub.asyncIterator(SEND_NOTIFICATION)
    },
  }
};

export default rootResolvers;
