import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import CointainerComponent from './components/ContainerComponent/CointainerComponent';
import ItemCount from './components/Button/itemCount';
import ItemList from './components/ItemList/ItemList';
import ItemListC from './components/ItemListC/ItemListC';
import { useState, useEffect } from 'react';



function App() {
  const stock = 5
  const [item, setItem] = useState(0)
  const plus = () => item <= stock - 1 ? setItem(item + 1) : alert('Se alzanzo el stock maximo');
  const minus = () => !item <= 0 ? setItem(item - 1) : alert('No has seleccionado ningun articulo');
  useEffect(() => {
    console.log('Item se actualizo')

  }, [item])


  return (
    <div className="App">
      <NavBar item={item} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CointainerComponent />
        <ItemCount item={item} plus={plus} minus={minus} />
        <ItemListC />
      </header>
    </div>
  );
}

export default App;
