import { useState, useEffect } from "react";
import useCart from "../hooks/useCart";


function CountWidget({item}) {


    const {id, name, price, image, description, stock} = item

    const { addToCart, cart } = useCart()
    const [count, setCount] = useState(1);
    const [stockAvaible, setStockAvaible] = useState(stock)
    


    const increment = () => {
        if(count < stockAvaible) {
          setCount(count + 1);  
        }
        
    }

    const decrement = () => {
        if(count > 1 && stockAvaible > 0) {
            setCount(count - 1);
        }
    }


    const handleChange = (event) => {
        setCount(parseInt(event.target.value, 10) || 0); 
      };
    
    useEffect(() => {
        setStockAvaible(stock);
    }, [stock])

    useEffect(() => {
        console.log("Cart updated:", cart); 
      }, [cart]);

    

    return(
        <section>

            


            
            <div className="fs-5 mb-5">
                <div className="d-flex">
                    <button className='btn btn-outline-dark flex-shrink-0' onClick={decrement}>-</button>
                    <input className="form-control text-center ms-3 me-3" 
                        id="inputQuantity" 
                        type="num" 
                        value={count} 
                        min="1" 
                        max={stockAvaible} 
                        style={{maxWidth: "3rem"}}
                        onChange={handleChange}/>
                    <button className='btn btn-outline-dark flex-shrink-0' onClick={increment}>+</button>
                </div>
                <button className="btn btn-outline-dark flex-shrink-0 mt-4 w-auto" type="button" 
                onClick={() =>
                    {
                    addToCart(item, count), 
                    setStockAvaible(stockAvaible - count)
                    console.log("Tenemos tanto stock disponible" + cart)
                    setCount(1)}}
                >

                Agregar al Carro

                </button>
                
            </div>
            {cart.length > 0 ?


                <button className="btn btn-outline-dark bg-black text-white " data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" type="button">Ver tu carro de compras</button>
    
                :
                ""
                }
            
            
            
            
            
            
            
                      
            
        

        </section>
       
    )
    
}




export default CountWidget