export default `
  type Theme {
    id: Int!
    name: String!
  }
  type Themes {
    cursor: Int!
    data: [Theme]
  }
`;
