import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import DetailsPage from './components/detailsPage';
import NavBar from './components/navBar';

const App = () => (
  <div className="App">
    <NavBar />
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>

  </div>

);

export default App;
