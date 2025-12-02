import './App.css'
import Counter from './components/Counter';
import Input from './components/Input'
import Trainer from './components/Trainer';
import trainers from "./trainers.json";
import GetTrainers from "./components/GetTrainers";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import State from './components/State';
import ExternalData from './components/ExternalData';
import Components from './components/Components';
import NavBar from './components/NavBar';
import AddTrainer from './components/AddTrainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
        <Route path='/external' element={<ExternalData />} />
        <Route path='/state' element={<State />} />
        <Route path='/add' element={<AddTrainer />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App
