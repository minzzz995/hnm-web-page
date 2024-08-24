import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProduct = async () => {
      let searchQuery = query.get('q') || '';
      console.log('Search Query:', searchQuery); // 검색어 확인
      let url = `https://my-json-server.typicode.com/minzzz995/hnm-web-page/products?q=${searchQuery}`;
      console.log('Request URL:', url); // 요청 URL 확인
      let response = await fetch(url);      
      let data = await response.json();
      console.log('Response Data:', data); // 응답 데이터 확인
      setProductList(data);
    };

    useEffect(()=>{
        getProduct();
    }, [query]);

  return (
    <div>
        <Container className="product-container">
            <Row className="product-row">
                {productList.map((menu) => (
                    <Col key={menu.id} lg={3} className="product-col">
                        <ProductCard item={menu} />
                    </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll;