import Icon from './cartIcon.png'
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const cantidadCarrito = () => {

    }
    return (
        <div className='iconoNavBar'>
            <img src={Icon} alt="icono carrito" className='cartIcon' />
            <span className='cartQuantity'>{cart.length}</span>
        </div>
    )
}

export default CartWidget