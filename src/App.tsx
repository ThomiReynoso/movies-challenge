import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvMovieList from './pages/TvMovieList';
import TvMovieDetails from './pages/TvMovieDetails';
import Header from './components/header';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TvMovieList />} />
          <Route path="/details/:id" element={<TvMovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
