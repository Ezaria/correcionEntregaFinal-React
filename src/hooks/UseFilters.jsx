import { useContext } from "react"
import { FiltersContext } from "../context/filters"

function UseFilter() {

    const {filters, setFilters} = useContext(FiltersContext)


    const filterProducts = (item) => {
        return item.filter(productSelected => {
            return (
                productSelected.price >= filters.minPrice &&
                (    
                filters.category === 'all'||
                productSelected.category === filters.category
                )
            )
        })
       
    }

    return {filterProducts, setFilters, filters}
}

export default UseFilter