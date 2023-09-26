import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../components/API";
import ProductCard from "../components/ProductCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SearchPage({cart, setCart}){
    const {searchProduct} = useParams()
    const [searched, setSearched] = useState([])
    console.log(searchProduct)
    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllProducts()
            const search = data.filter((product) => {
                 return product.title.toLowerCase().includes(searchProduct.toLowerCase())
            }
           )
           setSearched(search)
        }

        fetchData()
    }, [])
    console.log(searched)
        if(searched.length === 0){
            return(
                <div className="ItemsNotFound">Item not found, please try again!</div>
            )
        }

        else {
            return(
        <div>
             {/* <p>this page shows the products searched</p> */}
            <Row xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'} xxl={'auto'} className="g-4">
                {
                    Array.from({ length: 1 }).map((_, idx) => (


                        searched.map((product, index) => {
                            return (
                                <Col key={index}>
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        isActive={true
                                        }



                                    />

                                </Col>
                            )
                        })


                    ))
                }
            </Row>
        </div>
            )}
    
}