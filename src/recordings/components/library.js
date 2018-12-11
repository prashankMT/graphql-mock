export default `
  type Library {
    id: String!
    name: String!
    count: Int!
    hasNew: Boolean!
    description: String!
  }
  type Libraries {
    cursor: Int!
    data: [Library]
  }
`;
