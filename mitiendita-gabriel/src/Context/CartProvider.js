import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            console.log("El producto ya está en el carrito")
            const newCart = cart.map((cartItem) => {
                if (cartItem.item.id === item.id) {
                    return { item, cantidad: cartItem.cantidad + cantidad }
                } else {
                    return cartItem
                }
            })
            setCart(newCart)
        } else {
            console.log("El producto no está en el carrito")
            setCart([...cart, { item, cantidad }])
        }
        console.log(cart)
        totalCart()
    }

    const isInCart = (id) => {
        return cart.some((cartItem) => cartItem.item.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter((cartItem) => cartItem.item.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const totalCart = () => {
        let totalAux = 0
        cart.forEach((cartItem) => {
            totalAux += cartItem.item.price * cartItem.cantidad
            return totalAux
        })
        setTotal(totalAux)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, totalCart, total }}>
            {children}
        </CartContext.Provider>
    )
}

