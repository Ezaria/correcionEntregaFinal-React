import useCart from "../hooks/useCart"

function CartItem ({image, name, price, quantity, product}) {

    const {cart, addInputToCart, removeFromCart} = useCart()
    const handleChangeCantidad = (event, producto) => {
      const nueveCantidad = parseInt(event.target.value);
      addInputToCart(producto, nueveCantidad)
    }
    return(
      

          <li className="list-group-item d-flex justify-content-between align-items-center">
            
            <div className="d-flex align-items-center">
              
              <img src={image} alt={name} className="img-fluid me-3" style={{width: "100px"}} />
            
            <div className="w-50">
              <p className="mb-0"><strong>{name}</strong></p>
              <p className="mb-0">${price.toLocaleString()} c/u</p>
              
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example" 
              value={quantity}
              onChange={(event) => handleChangeCantidad(event, product)}
              >
                {
                  Array.from({length: product.stock}, (_, i) => i + 1).map(
                    num => (
                    <option key={num} value={num} >{num}</option>
                  ))
                }
              </select>
              
            </div>

            </div>
            <div className="text-end">
              <p className="mb-4"><strong>${(quantity * price).toLocaleString()}</strong></p> 
              <button className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(product)}
              >X</button>
            </div>
  
          </li>

        
    )
    }

export default CartItem