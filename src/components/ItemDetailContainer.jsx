

import { useParams } from 'react-router-dom';
import { useState, useEffect
 } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';

function ItemDetailContainer() {
    const db = getFirestore();
    const itemCollection = collection(db, "catalog");
    const [itemRender, setItemRender] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const buscarProducto = async () => {
            try {
                const querySnapshot = await getDocs(itemCollection);
                const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const productoSelecionado = products.find(item => item.id === id);
                setItemRender(productoSelecionado); 
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        buscarProducto(); 
    }, [id]);

    return (
        <div>
            {itemRender ? ( 
                <ItemDetail itemRender={itemRender} /> 
            ) : (
                <p>Loading product...</p> // Show a loading message
            )}
        </div>
    );
}

export default ItemDetailContainer;
