import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import CointainerComponent from './components/ContainerComponent/CointainerComponent';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
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
            <Route path="category/:categoryName" element={<ItemListContainer />} />
            <Route path="category/:categoryName" element={<ItemListContainer />} />
            <Route path='cart/' element={<div>Empty Cart </div>} />
          </Routes>
        </BrowserRouter >
      </header>
    </div>
  );
}

export default App;
