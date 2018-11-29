export default `
  type Comment {
    id: Int!
    text: String!
    author: User
    recording: Recording
    postedOn: String!
  }
  type Comments {
    cursor: Int!
    data: [Comment]
  }
`;
