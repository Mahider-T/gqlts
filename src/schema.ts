export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        store: [String!]!
        reviews: [Review!]
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean
        reviews: [Review!]
    }
    type Review {
        id: ID!
        content: String!
        rating: Int!
        book_id: String!
        author_id: String!
        author: Author!
        book: Book!
    }
    type Query {
        books: [Book]
        book(id: ID!): Book 
        authors: [Author]
        author(id: ID!): Author 
        reviews: [Review] 
        review(id: ID!): Review 
    }
    type Mutation{
        deleteBook(id: ID): [Book!] 
        addBook(theBook: AddBookInput) : [Book!]
    }
    input AddBookInput{
        title: String,
        store: [String!]!
    }
`