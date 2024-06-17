import { basurero } from "../assets/Icons";
import useCart from "../hooks/useCart";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";


function Cart() {

  const {cart, clearCart} = useCart()


  const Total = cart.reduce((total, item) => total + item.quantity * item.price, 0)

  return (
    <>
      <div className="mx-3">
        <div className="mx-3">
          <ul className="list-group mt-5 mb-5 " > 
          { cart.map(item => (
            <CartItem key={item.id} {...item} product={item} />
          ))
          }
          </ul>


          
          <div className="sidebar-cart-footer modal-footer">
              <div className="w-100">
              <h5 className="mb-4">Total: <span className="float-end">${Total.toLocaleString()}</span></h5>
              
              
              <NavLink to={"/checkout"}><button type="button" className="w-100 btn btn-dark">Checkout</button></NavLink>
  
              <button type="button" className="w-100 btn btn-dark mt-2" onClick={clearCart}>{basurero}</button>

              

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Cart;



