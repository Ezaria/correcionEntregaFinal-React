import { Link } from "react-router-dom"
import { iconoCarro } from "../assets/Icons"


function ItemList ({item}) {

    const {id, name, price, image} = item

   
    return(
        <span className="col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
            <div className="card " style={{width: '18rem'}} key={id}>

                    <img src={image} className="card-img-top" alt={name} />

                    <div className="card-body">
                        <h5 className="card-title "><strong>{name}</strong></h5>
                        <h6 className="card-text">${price}</h6>                  
                        <Link to={"/item/" + id} className="btn btn-outline-dark flex-shrink-0 d-inline-flex justify-content-center">
                            {iconoCarro}
                        </Link>     

                    </div>
            </div>
        </span>

        
        
    )

}

export default ItemList