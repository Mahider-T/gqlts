import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

import { books, authors, reviews } from "./_db.js"; 

// console.log(books)
const resolvers = {
    Query: {
        book() {
            return books;
        },
        author() {
            return authors;
        },
        review() {
            return reviews;
        }

    }
}
// 
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port : 3000}
})

console.log("Listening on port", 3000);