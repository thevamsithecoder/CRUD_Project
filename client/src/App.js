import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  exact path="/" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />}> </Route>
        <Route exact path="/edit/:id" element={<Edit />}> </Route>
        <Route exact path="/view/:id" element={<Details />}> </Route>
      </Routes>
    </div>

  );
}

export default App;
