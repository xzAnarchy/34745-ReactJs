import './itemCount.css'
import { useEffect } from 'react';

const ItemCount = ({ setItem, item, stock }) => {

    const plus = () => {
        item <= stock - 1
            ? setItem(item + 1)
            : alert('Se alzanzo el stock maximo');
    }
    const minus = () => {
        !item <= 0
            ? setItem(item - 1)
            : alert('No has seleccionado ningun articulo');
    }

    return (
        <>
            <div className='itemCount'>
                <button onClick={minus} className='botonesStock'><span className='plusMinus'>-</span></button>
                <p className='count'>{item}</p>
                <button onClick={plus} className='botonesStock'><span className='plusMinus'>+</span></button>
            </div>
            <div><button className='botonPrueba'>Agregar al Carrito</button></div>
        </>
    )
}

export default ItemCount