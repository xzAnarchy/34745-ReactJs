import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            console.log('Ya esta en el carrito')
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity }
                } else {
                    return cartItem
                }
            })
            setCart(newCart)
            console.log(cart)
        } else {
            console.log('No esta en el carrito')
            setCart([...cart, { ...item, quantity }])
            console.log(cart)
        }
    }
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== id)
        setCart(newCart)
        totalCart()
    }

    const clear = () => {
        setCart([])
    }

    const totalCart = () => {
        const totalAux = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

        setTotal(totalAux)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, totalCart, clear }}>
            {children}
        </CartContext.Provider>
    )
}

