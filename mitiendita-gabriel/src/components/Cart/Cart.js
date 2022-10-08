import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import './Cart.css'
import moment from 'moment'
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import { clear } from "@testing-library/user-event/dist/clear"

const Cart = () => {
    const navigate = useNavigate()
    const { cart, removeItem, total } = useContext(CartContext)
    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: 0,
            email: ''
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a')
    })

    // console.log('cart', cart)
    const db = getFirestore()

    const createOrder = () => {
        setOrder((currentOrder) => {
            return {
                ...currentOrder,
                items: cart,
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
                date: moment().format('DD/MM/YYYY, h:mm:ss a')
            }
        })
        // Guardamos la orden en la colección 'orders'
        const query = collection(db, 'orders')
        // Ejecutamos la operación de escritura en la base de datos
        addDoc(query, order)
            .then(({ id }) => {
                console.log(id);
                // Actualizamos el stock de los productos
                updateStockProducts()
                alert('Orden creada con exito');
            })
            .catch((error) => alert('Hubo un error con tu orden, intenta mas tarde', error))
    }

    const updateStockProducts = () => {
        cart.forEach((item) => {
            const queryUpdate = doc(db, 'items', item.id)
            updateDoc(queryUpdate, {
                category: item.category,
                description: item.description,
                image: item.image,
                price: item.price,
                title: item.title,
                stock: item.stock - item.quantity
            }).then(() => {
                console.log('Stock actualizado');
                // Vaciamos el carrito
                clear()
                // Redireccionamos al home
                navigate('/')
            }
            ).catch((error) => alert('Hubo un error al actualizar el stock', error))
        })
    }

    const handleInputChange = (e) => {
        console.log(e.target);
        setOrder((currentOrder) => {
            return {
                ...currentOrder,
                buyer: {
                    ...currentOrder.buyer,
                    [e.target.name]: e.target.value
                }
            }
        })
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
                        <label>Nombre: </label>
                        <input type="text" name="name" value={order.buyer.name} onChange={handleInputChange} />
                    </div>
                    <br />
                    <div>
                        <label>Telefono: </label>
                        <input type="number" name="phone" value={order.buyer.phone} onChange={handleInputChange} />
                    </div>
                    <br />
                    <div>
                        <label>Email: </label>
                        <input type="email" name="email" value={order.buyer.email} onChange={handleInputChange} />
                    </div>
                    <br />
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
            </div>
        </div >
    )
}

export default Cart