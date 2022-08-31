import React from 'react'
import Icon from './cartIcon.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <a className='iconoNavBar' href='#'><img src={Icon} alt="icono carrito" className='cartIcon' /></a>
        </div>
    )
}

export default CartWidget