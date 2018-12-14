import Recording from "./components/recording";
import Transcription from "./components/transcription";
import Questions from "./components/questions";
import Talktime from "./components/talktime";
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
    company(domain: String!): Company
    user: User   
    account(id: Int!): Account
    categories: [Category]
    themes(count: Int=10, cursor: Int, query: String): Themes
    accounts(count: Int=10, cursor: Int, query: String): Accounts
    topLibraries: [Library]
    libraries(count: Int=10, cursor: Int, query: String): Libraries
    participants(count: Int=10, cursor: Int, query: String): Participants
    comments(count: Int=10, cursor: Int, recordingId: String!): Comments 
    recordings(count: Int=10, categoryId: Int, libraryId: [Int], accounts: [Int!], themes: [Int!], particpants: [Int!], count: Int=10, cursor: Int, date: [String!], query: [String!], sortType: String, sortOrder: String): Recordings    
    recording(id: String!):Recording
    users(query: String, count: Int=10): Users
  }

  # this schema allows the following mutation:
  extend type Mutation {
    updateShareRecordings(recordingId: ID!, addedUsers: [ID], deletedUsers: [ID]): Recording
    updateRecordingsLibrary(recordingId: ID!, addedLibraries: [ID], deletedLibraries: [ID]): Recording
    changeLocale: Account
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
  Reaction,
  Transcription,
  Talktime,
  Questions
];
