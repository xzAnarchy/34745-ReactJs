import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import './Cart.css'
import moment from 'moment'
import { collection, addDoc, getFirestore, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext)
    console.log('cart', cart)

    const db = getFirestore()

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Juan',
                phone: '123456789',
                email: 'test@test.com'
            },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: moment().format()
        }
        const query = collection(db, 'orders')
        addDoc(query, order)
            .then(({ id }) => {
                console.log(id);
                alert('Orden creada con exito');
            })
            .catch((error) => alert('Hubo un error con tu orden, intenta mas tarde', error))

    }

    const updateOrder = () => {
        const idOrder = '5LJmuoAdsRV4nrxdHanZ'
        const order = {
            buyer: {
                name: 'Juan',
                phone: '123456789',
                email: 'test@test.com'
            },
            items: cart.pop(),
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: moment().format()
        }
        const queryUpdate = doc(db, 'orders', idOrder)
        updateDoc(queryUpdate, order)
            .then((res) => {
                console.log(res);
                alert('Orden actualizada con exito');
            })
            .catch((error) => alert('Hubo un error con tu orden, intenta mas tarde', error))
    }

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.length === 0 ? (
                    <>
                        <h2>No hay productos en el carrito</h2>
                        <Link to={'/'}>Volver a comprar</Link>
                    </>
                ) : (<>
                    <div>
                        <h3>Monto total en el carrito: </h3>
                        <h3>${total}</h3>
                    </div>
                    <div className='cartContainer'>
                        {cart.map((product) => (
                            <div key={product.id} className="cartCards">
                                <img src={product.image} width={'200px'} height={'200px'} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                                <p>Cantidad: {product.quantity}</p>
                                <p>total: {product.price * product.quantity}</p>
                                <button onClick={() => removeItem(product.id)}>Eliminar Producto</button>
                            </div>
                        ))}
                    </div>
                </>
                )}
            <div>
                <button onClick={createOrder}>Terminar Compra</button>
                <button onClick={updateOrder}>Actualizar Orden</button>
            </div>
        </div >
    )
}

export default Cart