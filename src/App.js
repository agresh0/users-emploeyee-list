import './App.css';
import './bootstrap.min .css'
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
