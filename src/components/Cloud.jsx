import useCart from '../hooks/useCart'


function Cloud() {
    const {cart} = useCart()
    return(

        <div className="bg-dark text-white p-3 rounded position-fixed bottom-0 start-0 ms-3 mb-3" style={{width: "300px", backdropFilter: "blur(8px)"}}>
        <div className="container">
            <span className="text-white opacity-75" style={{fontSize: "14px"}}>

            {/* <h2> Total cantidad: {
                 cart.reduce(
                    (total, item) => total + item.quantity, 0)
            }
            </h2> */}
            {/* <h2>
                Total: ${
                    cart.reduce(
                        (total, item) => total + item.quantity * item.price, 0
                    ).toLocaleString()
                }
            </h2> */}
           
            {/* {
                JSON.stringify(cart.map(items => ({
                    name: items.name,
                    price: items.price,
                    quantity: items.quantity
                })), null, 2)
               
            } */}
            </span>

        </div>
        </div>
    )
}

export default Cloud