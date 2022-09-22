import './ItemDetail.css'
import ItemCount from '../ItemCount/itemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1) //Pasa por el itemCount
    const { addToCart } = useContext(CartContext)

    const onAdd = (item) => {
        addToCart(item, cantidad)
    }

    return (
        <div className="card2">
            <img width={'200px'} height={'200px'} src={item.image} alt={item.title} />
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
            <h3 className="price">${item.price}</h3>
            <h3 className="price">Stock Disponible: {item.stock}</h3>
            <ItemCount stock={item.stock} cantidad={cantidad} setCantidad={setCantidad} />
            <div>
                <button onClick={() => onAdd(item)}>Agregar al Carrito</button>
            </div>
            <Link to={'/cart'}>
                <button>Ir al Carrito</button>
            </Link>
        </div>
    )
}

export default ItemDetail