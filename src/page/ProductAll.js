import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

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
    <div className='menu-card-list'>
        <ProductCard />
    </div>
  );
};

export default ProductAll;
