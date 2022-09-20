import './ItemDetail.css'
import ItemCount from '../ItemCount/itemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ lista }) => {

    const stock = 5
    const [item, setItem] = useState(0)

    const click = () => {
        console.log(item)
    }

    return (
        <div className="card2">
            <img width={'200px'} height={'200px'} src={lista.image} alt={lista.title} />
            <h3 className="title">{lista.title}</h3>
            <p className="description">{lista.description}</p>
            <h3 className="price">${lista.price}</h3>
            <ItemCount setItem={setItem} item={item} stock={stock} />
            <Link to={'/cart'}>
                <button onClick={click}>Ir al Carrito</button>
            </Link>
        </div>
    )
}

export default ItemDetail