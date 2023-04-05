import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvMovieList from './pages/TvMovieList';
import TvMovieDetails from './pages/TvMovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TvMovieList />} />
        <Route path="/details/:id" element={<TvMovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
