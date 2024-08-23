import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

const ProductDetail = () => {

  let{id} = useParams();

  const[product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");

  const getProductDetail = async () => {
    let url = `https://github.com/minzzz995/hnm-web-page/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(()=>{
    getProductDetail();
  },[]);

  return (
    <Container className="container-spacing">
      <Row>
        <Col className='product-image'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div className="emphasize-text spacing">{product?.title}</div>
          <div className="emphasize-text spacing">₩{product?.price}</div>
          <div className="spacing">{product?.choice == true? "Conscious choice":""}</div>
          <div className="spacing">
            <Dropdown>
              <Dropdown.Toggle  className="dropdown-toggle" variant="danger" id="dropdown-basic">
                {selectedSize}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                {product?.size?.map((size, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="spacing">
            <Button className="wide-button" variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
