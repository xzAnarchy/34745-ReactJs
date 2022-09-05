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
        <div>
            <a className='iconoNavBar' href='#'><img src={Icon} alt="icono carrito" className='cartIcon' /></a>
        </div>
    )
}

export default CartWidget