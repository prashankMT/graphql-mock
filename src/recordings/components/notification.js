export default `
  type Notification {
    id: ID!,
    text: String!,
    date: String!,
    image: String,
    read: Boolean!
  }
  type Notifications {
    cursor: Int!
    totalCount: Int!
    unreadCount: Int!
    data: [Notification]
  }
`