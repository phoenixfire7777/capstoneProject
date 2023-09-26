import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../components/API";

// this page shows the details of one product from ViewAllProducts page
export default function SingleProduct({cart, setCart, addToCart}) {
    const { id } = useParams()
    console.log(id)
    const [product, setProduct] = useState({})
    useEffect(() => {
        async function fetchData() {
            const data = await fetchProduct(id)
            setProduct(data)
            
            
        }

        fetchData()
    }, [id])
    // const {title, price, category, description, image} = product
    return (
        <div>
            <ProductCard
                product={product}
                cart={cart}
                setCart={setCart}
                isActive={false}
                addToCart={addToCart}
            />
        </div>
    )
}