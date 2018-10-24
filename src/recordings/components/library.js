export default `
  type Library {
    id: Int!
    name: String!
    count: Int!
    hasNew: Boolean!
  }
  type Libraries {
    cursor: Int!
    data: [Library]
  }
`;
