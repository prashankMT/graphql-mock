export default `
  type Transcription {
    id: Int!
    text: String!
    startTimestamp: Int!
    speakers: [User]
  }
`;
