import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
