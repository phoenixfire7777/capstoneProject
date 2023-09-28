import { useState, useEffect } from "react"
import { fetchAllProducts } from "../components/API"
import ProductCard from "../components/ProductCard"
import Form from 'react-bootstrap/Form';



import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//this page allows user to view all products
export default function ViewAllProducts({products, setProducts, cart, setCart, addToCart, token, authenticated, setAuthenticated}) {
    const [categories, setCategories] = useState([])
    console.log("this is before " + authenticated)


    useEffect(() => {
        
        async function fetchData() {
            if(token !== null){
            setAuthenticated(true)
            console.log("this is after " + authenticated)
            }
            else{
                setAuthenticated(false)
            }
            const data = await fetchAllProducts()
            const categories = data.map(product => product.category)
            const uniqueCategories = [...new Set(categories)]
            setCategories(uniqueCategories)
            setProducts(data)
        }

        fetchData()
    }, [])

    console.log(categories)
    return (
        <div>
             <Row>
             <Form.Select aria-label="Default select example">
      <option>Filter</option>
      {
        categories.map(category => (
            <option value={category} key={category}>{category}</option>
        ))
      }
    </Form.Select>
             </Row>
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