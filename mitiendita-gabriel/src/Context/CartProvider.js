import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : null

            }))
        }
        else {
            setCart([...cart, { ...item, cantidad }])
        }
        console.log('cart', cart)
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }
    const removeItem = (id) => {
        cart.splice(cart.findIndex(item => item.id === id), 1)
    }
    const clear = () => {
        setCart([])
    }

    const totalCart = () => {
        return cart.reduce((previo, actualizado) => previo + actualizado.cantidad * actualizado.price, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

