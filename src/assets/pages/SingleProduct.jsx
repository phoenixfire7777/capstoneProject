import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../components/API";

// this page shows the details of one product from ViewAllProducts page
export default function SingleProduct() {
    const { id } = useParams()
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
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
                image={product.image}
                isActive={false}
            />
        </div>
    )
}