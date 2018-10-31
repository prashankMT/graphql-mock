export default `
  type User {
    id: Int!
    name: String!
    email: String!
    designation: String!
    recordings: [Recording]
    pic: String
    manager: User
  }

  type Users {
    cursor: Int!
    total: Int!
    data: [User]
  }
  type Company {
    id: Int!
    name: String!
    logo: String!
  }
`;
