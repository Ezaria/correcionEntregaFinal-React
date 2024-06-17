import CountWidget from "./CountWidget";

function ItemDetail({ itemRender}) {

    
    
    const {id, name, price, image, description, stock} = itemRender

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">

                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={image} alt={name}/>
                    </div>

                    <div className="col-md-6">
                        <div className="small mb-1">SKU: {id}</div>
                        <h1 className="display-5 fw-bolder">{name}</h1>
                        <div className="fs-5 mb-5">
                            {price ? <span>${price.toLocaleString()}</span> : <span>No disponible</span>}
                        </div>
                        <p className="lead">{description}</p>

                        <CountWidget item={itemRender}/>
                        
                    </div>
                </div>
            </div>
     
        </section>
    )
}

export default ItemDetail