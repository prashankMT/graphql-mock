export default `
  type User {
    id: String!
    name: String!
    email: String!
    designation: String!
    recordings: [Recording]
    pic: String
    manager: User,
    isTeam: Boolean!
    isProspect: Boolean!
  }

  type Users {
    cursor: Int!
    total: Int!
    hasMore: Boolean!
    data: [User]
  }
  type Company {
    id: String!
    name: String!
    logo: String!
  }
`;
