import { Link, NavLink } from "react-router-dom"
import { iconoCarro } from "../assets/Icons"
import Cart from "./Cart"
import useCart from "../hooks/useCart"



function NavBar () {
    const {cart} = useCart()
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    return(
        <nav className="navbar bg-light fixed-top mb-3">
        <div className="container-fluid">
            <div >
                <Link to={"/"} className="navbar-brand text-white" href="#"><img src="./images/NAVBAR.jpg" alt="" className="img-fluid" width="170px"/></Link>

                <NavLink to={"category/women"} className="navbar-brand text-black" href="#">Mujer</NavLink>
                <NavLink to={"category/men"} className="navbar-brand text-black" href="#">Hombre</NavLink>
            </div>


            <button className="navbar-toggler bg-light position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="d-flex justify-content-center">
                    {iconoCarro}
                    </span>
            
                    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger fs-7">
                        {totalItems}
                
                    </span>
            </button>

            <div className="offcanvas offcanvas-end"  tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <Cart />
           
            </div>
        </div>
        </nav>
    )
}

export default NavBar