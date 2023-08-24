import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes> 
    </div>
  );
}

export default App;
