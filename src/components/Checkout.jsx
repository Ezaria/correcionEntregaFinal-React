import { useState } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { basurero } from "../assets/Icons";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import OrderSummary from "./OrderSummary";
import Probando from "./Probando";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function Checkout() {

    const [validated, setValidated] = useState(false);

    const { cart, clearCart} = useCart()
    const ordenCompra = cart

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

  

    const generarOrden = async () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.name, price:item.price}));
        const ordenDeCompra = {buyer:buyer, items:items, total: Total}

        const db = getFirestore()
        const ordersCollection = collection(db, "orders");
        try {
            const data = await addDoc(ordersCollection, ordenDeCompra);
            setOrderId(data.id)
        } catch (error) {
            console.error("Error generating order:", error);
            
        }
       
    }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        event.stopPropagation();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true); 
            return; 
        }
        
        generarOrden()
         
        
    };
 

    const Total = cart.reduce( (total, item) => total + item.quantity * item.price, 0).toLocaleString()

    return(
        <>

        { orderId && nombre && email && telephone ? <OrderSummary ordenCompra={ordenCompra} id={orderId}/> : 
        
                <div className="container my-5 pt-10">
                <div className="row">
                    <div className="col mt-5">
                       

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Col className="mb-3">

                            <Form.Group  className='mb-3' controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                onInput={(e) => {setNombre(e.target.value)}}
                                required
                                type="text"
                                placeholder="Ingrese su nombre..."
                                
                            />

                            <Form.Control.Feedback type='invalid'>Tienes que ingresar un nombre</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  className='mb-3'controlId="validationCustom02">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                            onInput={(e) => {setTelephone(e.target.value)}}
                                required
                                type="text"
                                placeholder="Ingrese su numero..."
                                
                            />
                            <Form.Control.Feedback type='invalid'>Tiene que ser un numero +12344567</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  className='mb-3' controlId="validationCustomUsername">
                            <Form.Label>Correo</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                onInput={(e) => {setEmail(e.target.value)}}
                                type="text"
                                placeholder="Ingrese su correo..."
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Escrive un correo (ejemplo@gmail.com)
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Col>
                        
                        

                        <Button type="submit" className="btn btn-dark">

                            Generar Orden
                          
            
                        </Button>
                        </Form>

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

                    <button type="button" className="w-100 btn btn-dark mt-2" 
                
                    
                    onClick={clearCart}
                    >{basurero}</button>

                    </div>
                    

                
                </div>
            </div>

        }
        </>
)
    

}

export default Checkout;


