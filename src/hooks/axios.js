import axios from 'axios';

export const UsersAxios = axios.create( {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
} );

export const BooksAxios = axios.create( {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    timeout: 5000
} );

