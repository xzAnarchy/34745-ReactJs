import Icon from './cartIcon.png'
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className='iconoNavBar'>
            <img src={Icon} alt="icono carrito" className='cartIcon' />
            <span className='cartQuantity'>{cart.length}</span>
            <h3 className='nameShop'>ReShop</h3>
        </div>
    )
}

export default CartWidget