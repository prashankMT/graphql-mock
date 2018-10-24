export default `
  type Recording {
    id: Int!
    title: String!
    account: Account!
    sharedWith: [User]
    themes: [Theme]
    duration: Int!
    isBookmarked: Boolean!
    comments: [Comment]
    date: Int!
    reactions: [Reaction]
    isNew: Boolean!
    libraries: [Library]
    hasNewComment: Boolean!
    hasNewReaction: Boolean!
  }
  type Recordings {
    cursor: Int!
    total: Int!
    data: [Recording]
  }
`;
