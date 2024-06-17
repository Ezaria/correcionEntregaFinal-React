import { Link } from 'react-router-dom'

function Carousel () {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <Link to={"/category/men"} className="carousel-item active" data-bs-interval="3000">
                                
                                <img src="../images/MEN.jpg" className="d-block w-100 "  alt="..." /> 
                            
                                <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
                                <h2 className="py-2 px-1 display-1"><strong>HOMBRE</strong></h2>
                               
                                <button type="button" className="btn btn-outline-light px-4 py-2 rounded-0 bg-dark bg-opacity-50 py-2 px-4">Shop Men</button>
                                </div>
                            </Link>
                            <Link to={"/category/women"} className="carousel-item" data-bs-interval="3000">
                                <img src="../images/WOMEN.jpg" className="d-block w-100 " alt="..." />
                                <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
                                <h2 className="py-2 px-1 display-1"><strong>MUJER</strong></h2>
                                <button type="button" className="btn btn-outline-light px-4 py-2 rounded-0 bg-dark bg-opacity-50 py-2 px-4">Shop Women</button>
                                </div>
                            </Link>

                            <div className="carousel-item" data-bs-interval="3000"  >
                                <img src="../images/MARCA.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
                                    <h2 className="bg-dark bg-opacity-10 py-2 px-1 "><img src="../images/LOGO.png" alt="" className='img-fluid w-50 '/></h2>
                                    
                                    
                                </div>
                            </div>


                            </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
    </div>

    )
}

export default Carousel