import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ShopCategory() {
    const [itemRender, setItemRender] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "catalog");
        getDocs(itemCollection).then(snapShot => {
            if (snapShot.size > 0) {
                const productsFromFirebase = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const filteredProducts = id 
                    ? productsFromFirebase.filter(item => item.gender === id) 
                    : productsFromFirebase; 
                
                setItemRender(filteredProducts);
                console.log(filteredProducts); 
            }
        });
    }, [id]);

    const initialProducts = itemRender;

    return (
        <ProductsCard initialProducts={initialProducts} />
    );
}

export default ShopCategory;
