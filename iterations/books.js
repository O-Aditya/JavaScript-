const books =[
    {
        title : 'The Alchemist',
        genre : 'Adventure',
        published : 1988
    },
    {
        title : 'The Prophet',
        genre : 'Philosophy',
        published : 1923
    },
    {
        title : 'The Little Prince',
        genre : 'Adventure',
        published : 1943
    },
    {
        title : 'The Hobbit',
        genre : 'Adventure',
        published : 1937
    },
    {
        title : 'Harry Potter and the Philosopher\'s Stone',
        genre : 'Fantasy',
        published : 1997
    },
    {
        title : 'The Catcher in the Rye',
        genre : 'Fiction',
        published : 1951
    },
    {
        title : 'To Kill a Mockingbird',
        genre : 'Fiction',
        published : 1960
    },
    {
        title : 'The Great Gatsby',
        genre : 'Fiction',
        published : 1925
    },
    
]

const usersbooks = books.filter(book => book.genre === 'Adventure' && book.published > 1920)


console.log(usersbooks);