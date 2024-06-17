import { createContext, useState } from "react"

export const FiltersContext = createContext({
    category: 'all',
    minPrice:0
})

function FilterProvider ({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 10000
    })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

export default FilterProvider