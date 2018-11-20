export default `
  type Recording {
    id: ID!
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
    transcription: [Transcription]
    questions: QuestionsAsked
    talktime: TalkTime
    interchanges: Int!
  }
  type Recordings {
    cursor: Int!
    total: Int!
    data: [Recording]
  }
`;
