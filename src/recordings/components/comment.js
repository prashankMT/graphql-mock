export default `
  type Comment {
    id: Int!
    text: String!
    by: User
    recording: Recording
  }
  type Comments {
    cursor: Int!
    data: [Comment]
  }
`;
