import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // Agrego item
    const addToCart = (item, cantidad) => {
        // 1. Guardo mi producto en un objeto 
        let cartElement = { item, cantidad }
        // 2. creo un carrito auxiliar 
        let cartAux = []
        // Consulto si el producto esta en el carrito
        if (isInCart(item.id)) {
            console.log('esta en el carrito')
            // 1. Busco el producto por el id
            cartElement = cart.find(element => element.id === item.id)
            // 2. Actualizo el contador del item filtrado
            cartElement.cantidad += cantidad;
            // 3. retorno el carrito tal como estaba
            cartAux = [...cart]
        } else {
            console.log('NO ESTA EN EL CARRITO')
            //1 Agrego el item al carrito 
            cartAux = [cartElement, ...cart]
        }
        setCart(cartAux)
        console.log(cart)
    }

    // const addToCart = (item, cantidad) => {
    //     if (isInCart(item.id)) {
    //         setCart(cart.map(producto => {
    //             return producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : console.log(cart)
    //         }))
    //     }
    //     else {
    //         setCart([...cart, { ...item, cantidad }])
    //     }
    //     console.log('cart', cart)
    // }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }
    const removeItem = (productId) => {
        let cartAux = [];
        cart.forEach(product => {
            if (product.id !== productId) {
                cartAux.push(product)
            }
        })
        setCart(cartAux)
        // let index = cart.findIndex(item => item.id === productId);
        // cart.splice(index, 1);
        // console.log(cart);
    }
    const clear = () => {
        setCart([])
    }

    const totalCart = () => {
        return cart.reduce((previo, actualizado) => previo + actualizado.cantidad * actualizado.price, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

