import { useState } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { basurero } from "../assets/Icons";
import { addDoc, collection, getFirestore } from "firebase/firestore";



function Checkout() {

    const { cart, clearCart} = useCart()

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.name, price:item.price}));
        const ordenDeCompra = {buyer:buyer, items:items, total: Total}

        const db = getFirestore()
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, ordenDeCompra).then(data =>{
            console.log(data)
            setOrderId(data.id)
        })

        clearCart()

        // SE AGREGA AL CATALOGO DE FIREFOX
        // const itemsCollection = collection(db, "catalog");
        
        // products.forEach(item => {
        //     addDoc(itemsCollection, item)
        // })
        
        
        
       
    }

    
  

    const Total = cart.reduce( (total, item) => total + item.quantity * item.price, 0).toLocaleString()

    return(
        <div className="container my-5 pt-10">
        <div className="row">
            <div className="col mt-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control"  onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telephone</label>
                        <input type="text" className="form-control"  onInput={(e) => {setTelephone(e.target.value)}}/>
                    </div>
                    
                    <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                </form>
            </div>

            <div className="col">
            <ul className="list-group mt-5 mb-5 " > 
            {
                cart.map(item => (
                    <CartItem key={item.id} {...item} product={item} />
                ))
            }
            </ul>
            <div className="sidebar-cart-footer modal-footer">
                <div className="w-100">
                    <h5 className="mb-4">Total: <span className="float-end">${Total}</span></h5>
                </div>
            </div>

            <button type="button" className="w-100 btn btn-dark mt-2" onClick={clearCart}>{basurero}</button>

            </div>
            

           
        </div>
        {/* //GENERA ALERTA DE COMPRA */}
        <div className="row my-5">
            <div className="col text-center">
                {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Se ha generado tu orden de compra <b>{orderId}</b></div> : "No se ha generado la orden"}
            </div>

        </div>
    </div>
)
    

}

export default Checkout;


