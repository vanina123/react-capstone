import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import DetailsPage from './components/detailsPage';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" component={<HomePage />} />
        <Route path="/details/:id" component={<DetailsPage />} />
      </Routes>
    </Router>
    // <div>
    //   <HomePage />
    //   <DetailsPage />
    // </div>
   
    
  );
};

export default App;