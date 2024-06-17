
import ItemList from "./ItemList"


function ItemListContainer ({initialProducts}) {
    
    const listaProductos = initialProducts;

    return (
        <div className="container-fluid-px py-6 ">
            <div className="row">
                <div className="row gx-3 my-3 justify-content-left text-center">
                    
                    {
                    listaProductos.map(item => (
                        <ItemList item={item} key={item.id} />
                        )) }
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer