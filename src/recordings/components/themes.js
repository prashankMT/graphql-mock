export default `
  type Theme {
    id: Int!
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
    data: [Theme]
  }
  type Keyword {
    id: Int!
    name: String!
  }

  type KeywordOccurance {
    name: String!
    occurance: Int!
  }
`;
