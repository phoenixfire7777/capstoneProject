import { useState, useEffect } from "react"
import { fetchAllProducts } from "../components/API"
import ProductCard from "../components/ProductCard"



import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//this page allows user to view all products
export default function ViewAllProducts({products, setProducts, cart, setCart, addToCart}) {
    
    


    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllProducts()
            setProducts(data)
        }

        fetchData()
    }, [])
    return (
        <div>
             
            <Row xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'} xxl={'auto'} className="g-4">
                {
                    Array.from({ length: 1 }).map((_, idx) => (


                        products.map((product, index) => {
                            
                            return (
                                <Col key={index}>
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        cart={cart}
                                        setCart={setCart}
                                        isActive={true}
                                        addToCart={addToCart}



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