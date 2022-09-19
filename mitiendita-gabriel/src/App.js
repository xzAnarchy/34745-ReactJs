import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import CointainerComponent from './components/ContainerComponent/CointainerComponent';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ComputerListContainer from './pages/ComputerListContainer/ComputerListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <CointainerComponent />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="contacto" element={<div>Contact</div>} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path="productos/:type" element={<ComputerListContainer />} />
            <Route path="celulares" element={<div>Celulares</div>} />
          </Routes>
        </BrowserRouter >
      </header>
    </div>
  );
}

export default App;
