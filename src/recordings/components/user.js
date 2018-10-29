export default `
  type User {
    id: Int!
    name: String!
    recordings: [Recording]
    email: String!,
    designation: String!,
    manager: User
  }
  type Company {
    id: Int!
    name: String!
    logo: String!
  }
`;
