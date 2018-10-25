export default `
  type User {
    id: Int!
    name: String!
    email: String!
    recordings: [Recording]
    pic: String
  }

  type Users {
    cursor: Int!
    total: Int!
    data: [User]
  }
`;
