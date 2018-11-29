export default `
  type Transcription {
    id: Int!
    text: String!
    startTime: Int!
    speakers: [User]
  }
`;
