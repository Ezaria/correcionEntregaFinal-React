import { useContext } from "react";
import { CartContext } from "../context/cart";



function useCart() {
    const cart = useContext(CartContext)

    if(cart === undefined){
        console.error("useCart must be used within a CartProvider")
    }

    return cart
}

export default useCart
