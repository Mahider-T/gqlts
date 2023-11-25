interface Book{
    id: number;
    title: string;
    store: Array<string>;

}

type Author = {
    id: number;
    name: string;
    verified: boolean;

}

interface Review {
    id: number;
    rating: number;
    content: string;
    author_id: number;
    book_id: number;

}


export const books : Book[] = [
    {id: 1, title: 'Zelda, Tears of the Kingdom', store: ['Switch']},
    {id: 2, title: 'Final Fantasy 7 Remake', store: ['PS5', 'Xbox']},
    {id: 3, title: 'Elden Ring', store: ['PS5', 'Xbox', 'PC']},
    {id: 4, title: 'Mario Kart', store: ['Switch']},
    {id: 5, title: 'Pokemon Scarlet', store: ['PS5', 'Xbox', 'PC']},
] 
  
export const authors: Author[] = [
    {id: 1, name: 'mario', verified: true},
    {id: 2, name: 'yoshi', verified: false},
    {id: 3, name: 'peach', verified: true},
  ]
  
export const reviews: Review[] = [
    {id: 1, rating: 9, content: 'lorem ipsum', author_id: 1, book_id: 2},
    {id: 2, rating: 10, content: 'lorem ipsum', author_id: 2, book_id: 1},
    {id: 3, rating: 7, content: 'lorem ipsum', author_id: 3, book_id: 3},
    {id: 4, rating: 5, content: 'lorem ipsum', author_id: 2, book_id: 4},
    {id: 5, rating: 8, content: 'lorem ipsum', author_id: 2, book_id: 5},
    {id: 6, rating: 7, content: 'lorem ipsum', author_id: 1, book_id: 2},
    {id: 7, rating: 10, content: 'lorem ipsum', author_id: 3, book_id: 1},
  ]