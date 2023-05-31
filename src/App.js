import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Details from './components/display';
import Display from './components/homeDisplay';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = "/" element={<Display />} />
        <Route path = "/details/:id" element={<Details />}/>
      </Routes>
      
    </div>
  );
}

export default App;
