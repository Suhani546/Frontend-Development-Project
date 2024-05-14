import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as RoutedRoute } from 'react-router';
import BooksPage from './BooksPage';
import BookDetailsPage from './BookDetailsPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <RoutedRoute path="/books/:id" element={<BookDetailsPage />} />
        <RoutedRoute path="/books" element={<BooksPage />} />
        <RoutedRoute path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
