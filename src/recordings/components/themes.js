export default `
  type Theme {
    id: String!
    name: String!
    keywords: [Keyword]
  }
  type RecordingThemes{
    id: Int!
    name: String!
    keywords: [KeywordOccurance]
  }
  type Themes {
    cursor: Int!
    hasMore: Boolean!
    data: [Theme]
  }
  type Keyword {
    id: String!
    name: String!
  }

  type KeywordOccurance {
    name: String!
    occurance: Int!
  }
`;
