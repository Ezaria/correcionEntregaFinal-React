import ItemListContainer from "./ItemListContainer"
import { useState, useEffect} from "react"
import Filter from "./Filter"
import Header from "./Header"
import { useParams } from "react-router-dom"
import UseFilter from "../hooks/UseFilters"


function ProductsCard({initialProducts}) {

    const {filterProducts, filters} = UseFilter()
    
    const [ products, setProducts ] = useState(initialProducts)
    const [productosFiltrados, setProductosFiltrados] =useState([])
    const {id} = useParams()

    useEffect( () => {
        setProductosFiltrados(filterProducts(products))
    
    }, [products, filters])

    useEffect( () => {
    setProducts(initialProducts)
    }, [initialProducts])
    

    return(
        <section>
            <div className="row me-5 ms-5 mt-4">
               <Header name={id}/>

                <div className="col-auto">
                    <Filter/>
                </div>
                { 
                initialProducts.length > 0 
                ? 
                <div className="col"> 
                    <ItemListContainer initialProducts={productosFiltrados}/>
                </div> 
                
                : 
                "Esta Cargando"

                }
            </div>
        </section>
      
        
    )
}

export default ProductsCard