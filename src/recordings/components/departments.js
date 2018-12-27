export default `
  type Department {
    id: String!
    name: String!
  }
  type Departments {
    cursor: Int!
    hasMore: Boolean!
    data: [Department]
  }
`;
