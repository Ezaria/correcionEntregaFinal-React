import { Link } from 'react-router-dom'
import { iconoCarro } from '../assets/Icons'
import useCart from '../hooks/useCart'




function OrderSummary({ordenCompra, id}) {

 const cart = ordenCompra
 const {clearCart} =useCart()
  
    
    
    
  return (
        
        
      
            
  <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mt-4">
            <div className="position-relative"> 

               
                    <img className="img-fluid" src="./images/ORDER.png" alt="Fondo"/>
        
            </div>
        </div>

        <div className="col-md-6">
          

                <h3 className="h3 text-gray-800 font-weight-bold mt-5 text-center">Orden de Compra</h3>
                <div className="card mt-3">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {
                                       cart.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>${product.price.toLocaleString()}</td>
                                                <td>{product.quantity}</td>
                                                <td>${(product.quantity*product.price).toLocaleString()}</td>
                                                
                                            </tr>
                                        ))
                                    }
                                    
                                
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                                    <td><strong>{cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toLocaleString()}</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                        <p className="text-right">Order Number: <strong>{id}</strong></p>
                        <Link to={"/"} className="btn btn-primary bg-black  btn-block d-flex align-cart-center justify-content-center border-dark" onClick={clearCart}>
                        <span className="me-2">{iconoCarro}</span> 
                        Seguir Comprando 
                      </Link>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    
      )
      
      
}

export default OrderSummary

