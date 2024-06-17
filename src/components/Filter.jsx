import UseFilter from "../hooks/UseFilters"

// no use UseId
function Filter()  {

    const { filters, setFilters} = UseFilter()

    const handleChangeMinPrice = (event) => {
            setFilters(prevState => ({
                ...prevState,
                minPrice: event.target.value
            }))
        }
    const handleChangeCategory = (event) => {
            setFilters(prevState => ({
                ...prevState,
                category: event.target.value
            }))
            
        }   
    

    return(
        
        <div className="list-unstyled ps-0"> 
            <li className="border-top my-3"></li>
    
            <ul className="list-unstyled ps-0">

                <li className="mb-1">
        
                    <button 
                    className="btn btn-toggle align-items-center rounded collapsed" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#home-collapse" 
                    aria-expanded="false">
                    <h3>Categorias + </h3>
                    </button> 
        
                    <div className="collapse" id="home-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" >
                            <li>
                                <div className="form-check">
                                    <input name="size" type="radio" id="size2" className="form-check-input" value="polera" onClick={handleChangeCategory}/>
                                    <label title="" htmlFor="size2" className="form-check-label" >Polera</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input name="size" type="radio" id="size2" className="form-check-input" value= "pantalon" onClick={handleChangeCategory}/>
                                    <label title="" htmlFor="size2" className="form-check-label" >Pantalon</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input name="size" type="radio" id="size2" className="form-check-input" value= "all" onClick={handleChangeCategory}/>
                                    <label title="" htmlFor="size2" className="form-check-label" >Todos</label>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </li>
            
            
                <li className="border-top my-3"></li>
    
            
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#Rango-collapse" aria-expanded="false">
                    <h3>Rango Precio + </h3>
                    </button> 
                
                <form id="Rango-collapse" >
                    <div className="form-group">
                        
                        <input 
                            type="range" 
                            className="form-control-range" 
                            id="price" 
                            min='0' 
                            max='83000'
                            onChange={handleChangeMinPrice}
                            value={filters.minPrice}
                        />
                        <span>${filters.minPrice}</span>

                    </div>
                    </form>
                </li>
            
            </ul>
        </div>
            
        )
}

export default Filter
