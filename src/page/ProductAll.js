import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProduct = async () => {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(()=>{
        getProduct();
    }, []);

  return (
    <div>
        <Container className="product-container">
            <Row className="product-row">
                {productList.map((menu) => (
                    <Col lg={3} className="product-col">
                        <ProductCard item={menu} />
                    </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll;
