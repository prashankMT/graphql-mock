export default `
  type Account {
    id: Int!
    name: String!
  }
  type Accounts {
    cursor: Int!
    data: [Account]
  }
`;
