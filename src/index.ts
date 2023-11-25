import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

import { books, authors, reviews } from "./_db.js"; 

// console.log(books)
const resolvers = {
    Query: {
        books() {
            return books;
        },
        book(_,args){
            return books.find((oneBook)=> oneBook.id === args.id)
        },
        authors() {
            return authors;
        },
        author(_,args) {
            return authors.find((oneAuthor) => oneAuthor.id === args.id);
        },
        reviews() {
            return reviews;
        },
        review(_,args){
            return reviews.find((oneReview) => oneReview.id === args.id);
        },
    },
   //filter all reviews associated with a single book
   Book: {
    reviews(parent){
        return reviews.filter((oneReview) => oneReview.book_id === parent.id);
    }
   },
   //filter all reviews of a single author 
   Author: {
    reviews(parent){
        return reviews.filter((oneReview) => oneReview.author_id === parent.id)
    }
   },
   Review: {
       author(parent){
           return authors.find((oneAuthor) => oneAuthor.id === parent.author_id);
       },
       book(parent){
           return books.find((oneBook) => oneBook.id === parent.book_id);
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