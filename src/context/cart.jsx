import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product, stockAgregar) =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0 ){

            const newCart = structuredClone(cart);
            if(newCart[productInCartIndex].quantity + stockAgregar <= product.stock) {
                newCart[productInCartIndex].quantity += stockAgregar
                
                setCart(newCart)
            }
        } else {
            setCart(prevCart => [...prevCart, 
                {...product, 
                    quantity: stockAgregar,
    
                }])
        }
    }

    const addInputToCart = (product, inputStock) => {

        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0 ){

            const newCart = structuredClone(cart);
            if(newCart[productInCartIndex].quantity <= product.stock) {
                newCart[productInCartIndex].quantity = inputStock
                
                setCart(newCart)
            }
        } else {
            setCart(prevCart => [...prevCart, 
                {...product, 
                    quantity: inputStock,
    
                }])
        }
    }
    
    
    const clearCart = () =>{
        setCart([])
        
    }
    const removeFromCart = product => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, addInputToCart}}>
            {children}
        </CartContext.Provider>
    )
}

