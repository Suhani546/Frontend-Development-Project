import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
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
