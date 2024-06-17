import { useState } from "react";
import useCart from "../hooks/useCart"



function Probando() {

    const {cart, addInputToCart} = useCart()

    
      const handleChangeCantidad = (event, producto) => {
        const nueveCantidad = parseInt(event.target.value);
        addInputToCart(producto, nueveCantidad)
      };
    
      const calcularTotal = (producto) => {
        return producto.price * producto.quantity;
      };
    
      return (
        <div>
          {cart.map((producto) => (
            <div key={producto.id}>
              <p>Producto: {producto.name}</p>
              <p>Stock: {producto.stock}</p>
              <select
                value={producto.quantity}
                onChange={(event) => handleChangeCantidad(event, producto)}
              >
                {Array.from({ length: producto.stock }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <p>Cantidad a comprar: {producto.quantity}</p>
              <p>Total: ${calcularTotal(producto)}</p>
            </div>
          ))}
        </div>
      );
      
      
}

export default Probando
