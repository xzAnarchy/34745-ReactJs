import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext)
    console.log('cart', cart)
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to={'/'}>Volver a comprar</Link>
                </>
            ) : (<>
                <div>
                    <h3>Monto total en el carrito: </h3>
                    <h3>${total}</h3>
                </div>
                {cart.map((product) => (
                    <div key={product.item.id}>
                        <img src={product.item.image} width={'200px'} height={'200px'} alt={product.item.title} />
                        <h3>{product.item.title}</h3>
                        <p>{product.item.description}</p>
                        <p>${product.item.price}</p>
                        <p>Cantidad: {product.cantidad}</p>
                        <button onClick={() => removeItem(product.item.id)}>Eliminar Producto</button>
                    </div>
                ))}
            </>
            )}
        </div>
    )
}

export default Cart