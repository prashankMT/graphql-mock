export default `
  type Designation {
    id: String!
    name: String!
  }
  type Designations {
    cursor: Int!
    hasMore: Boolean!
    data: [Designation]
  }
`;
