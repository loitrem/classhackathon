import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import View from './pages/View/View'

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/view" element={<View/>}/>
          </Routes> 
    </div>
  );
}

export default App;
