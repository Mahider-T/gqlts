export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        store: [String!]!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean
    }
    type Review {
        id: ID!
        content: String!
        rating: Int!
    }
    type Query {
        book: [Book]
        author: [Author]
        review: [Review] 
    }
`