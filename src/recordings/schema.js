import Recording from "./components/recording";
import Category from "./components/category";
import Library from "./components/library";
import User from "./components/user";
import Accounts from "./components/accounts";
import Participants from "./components/participants";
import Themes from "./components/themes";
import Comments from "./components/comment";
import Reaction from "./components/reaction";

const typeDefs = `
  # the schema allows the following query:
  extend type Query {
    theme(id: Int!): Theme
    account(id: Int!): Account
    categories: [Category]
    themes(count: Int=10, cursor: Int, query: String): Themes
    accounts(count: Int=10, cursor: Int, query: String): Accounts
    topLibraries: [Library]
    libraries(count: Int=10, cursor: Int): Libraries
    participants(count: Int=10, cursor: Int, query: String): Participants
    comments(count: Int=10, cursor: Int, recordingId: Int!): Comments 
    recordings(count: Int=10, categoryId: Int, libraryId: [Int], accountId: [Int!], themeId: [Int!], particpantId: [Int!], count: Int=10, cursor: Int): Recordings
  }

  # this schema allows the following mutation:
  extend type Mutation {
  }
`;

export default [
  typeDefs,
  Recording,
  Category,
  Library,
  Themes,
  Participants,
  Accounts,
  Comments,
  User,
  Reaction
];
