import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartProvider.js'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <img src={logo} className="App-logo" alt="logo" />
            {/* Inicializo mis Rutas */}
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="contacto" element={<div>Contact</div>} />
              {/* Las rutas con : esperan un parametro,
               que se guarda con el useParams del ItemListContainer cuando seleccionas categoria en el navbar */}
              <Route path='detail/:id' element={<ItemDetailContainer />} />
              <Route path="category/:categoryName" element={<ItemListContainer />} />
              <Route path='cart/' element={<Cart />} />
            </Routes>
          </BrowserRouter >
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
