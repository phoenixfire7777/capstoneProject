import { useState, useEffect } from "react"
import { fetchAllProducts } from "../components/API"
import ProductCard from "../components/ProductCard"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//this page allows user to view all products
export default function ViewAllProducts() {
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllProducts()
            setProducts(data)
        }

        fetchData()
    }, [])
    return (
        <div>
            <Row xs={2} md={4} className="g-4">
                {
                    Array.from({ length: 4 }).map((_, idx) => (


                        products.map((product) => {
                            const { id, title, price, category, description, image } = product
                            return (
                                <Col key={idx}>
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        price={price}
                                        category={category}
                                        description={description}
                                        image={image}
                                        isActive={true}
                                        
                                        
                                        
                                    />

                                </Col>
                            )
                        })


                    ))
                }
            </Row>
        </div>
    )
}