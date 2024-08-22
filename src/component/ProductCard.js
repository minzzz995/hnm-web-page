import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const colors = [
    { name: "Denimblue", color: "rgb(93, 113, 141)" },
    { name: "Powderpink/Patterned", color: "rgb(237, 233, 215)" }
  ];

  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/product/${item.id}`);

  };

  return (
    <div className='card' onClick={showDetail}>
      <img src={item?.img}
        alt="Product"
        className="product-image"
      />
      <div>{item?.choice == true? "Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true? "신제품":""}</div>
      <div>
        {colors.map((color, index) => (
          <span 
            key={index}
            title={color.name} 
            className="color-circle"
            style={{ backgroundColor: color.color }}
          >
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
