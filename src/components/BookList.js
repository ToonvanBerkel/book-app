import React from 'react';

const books = [
  {
    id: 1,
    title: 'Oog om oog',
    author: 'M.J. Arlidge',
    img: './image3.jpg',
  },
  {
    id: 2,
    title: 'De terugkeer van Mia',
    author: 'Samuel Bjork',
    img: './image2.jpg',
  },
  {
    id: 3,
    title: 'Bloedmaan',
    author: 'Jo Nesbo',
    img: './image1.jpg',
  },
];

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.img} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
