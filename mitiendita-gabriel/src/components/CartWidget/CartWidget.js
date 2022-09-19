import React from 'react'
import Icon from './cartIcon.png'
import './CartWidget.css'
// import { useState } from 'react'
// import ItemCount from '../Button/itemCount'

const CartWidget = () => {
    // const [cantidad, setCantidad] = useState(0)
    // const cantidadCarrito = () => {

    // }
    return (
        <div className='iconoNavBar'>
            <img src={Icon} alt="icono carrito" className='cartIcon' />
        </div>
    )
}

export default CartWidget