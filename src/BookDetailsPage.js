import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://softwium.com/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  return (
    <div>

{/* ********************************************* Header ******************************************************** */}
    <header>
        <nav>
        <p><a href="/#">Books</a></p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

{/* ********************************************* Main ******************************************************** */}
    <div className='details'>
      <h1>Book Details</h1>
      {book ? (
        <div className='cont'>
        <table>
        <tr>
          <th scope="row">Title</th>
          <td>{book.title}</td>
        </tr>
        <tr>
          <th scope="row">ISBN</th>
          <td>{book.isbn}</td>
        </tr>
        <tr>
          <th scope="row">Title</th>
          <td>{book.title}</td>
        </tr>
        <tr>
          <th scope="row">Authors</th>
          <td>{book.authors.join(', ')}</td>
        </tr>
        </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

{/* ********************************************* Footer ******************************************************** */}
    <div className='footer'>
    <footer>
        <p>&copy; 2024 My Books Website. All rights reserved.</p>
    </footer>
    </div>

    </div>
  );
};

export default BookDetailsPage;
