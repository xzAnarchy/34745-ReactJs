import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import CointainerComponent from './components/ContainerComponent/CointainerComponent';
import ItemCount from './components/ItemCount/itemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CointainerComponent />
        <ItemCount />
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
