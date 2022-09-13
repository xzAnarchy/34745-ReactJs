import { useState } from "react";
import "./Item.css"

const Item = ({ title, price, image }) => {
    const stock = 5
    const [item, setItem] = useState(0)
    const plus = () => item <= stock - 1 ? setItem(item + 1) : alert('Se alzanzo el stock maximo');
    const minus = () => !item <= 0 ? setItem(item - 1) : alert('No has seleccionado ningun articulo');
    return (
        <div>
            <img width={'200px'} src={image} alt={title} />
            <h2>{title}</h2>
            <h3>${price}</h3>

            <div className='itemCount'>
                <button onClick={minus} className='botonesStock'><span className='plusMinus'>-</span></button>
                <p className='count'>{item}</p>
                <button onClick={plus} className='botonesStock'><span className='plusMinus'>+</span></button>
            </div>
            <div><button onClick={plus} className='botonPrueba'>Agregar al Carrito</button></div>
        </div>
    )
}

export default Item