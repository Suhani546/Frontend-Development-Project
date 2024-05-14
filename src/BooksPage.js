import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://softwium.com/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>

    {/* ********************************************* Header **************************************************** */}
      <header>
        <nav>
        <p><a href='#'>Books</a></p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    {/* ********************************************* Main ******************************************************** */}
    <div className='content'>
    <h1>List of the books are given below:</h1>
    <p>Click on the name of the books for details: </p>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    {/* ********************************************* Footer ******************************************************** */}
    <footer>
        <p>&copy; 2024 My Books Website. All rights reserved.</p>
    </footer>

    </div>
  );
};

export default BooksPage;