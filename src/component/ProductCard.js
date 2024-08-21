import React from 'react';
import '../App.css';

const ProductCard = () => {
  const colors = [
    { name: "Denimblue", color: "rgb(93, 113, 141)" },
    { name: "Powderpink/Patterned", color: "rgb(237, 233, 215)" }
  ];

  return (
    <div>
      <img src='https://lp2.hm.com/hmgoepprod?set=source[/34/35/3435c0ea7c0b8f577a6c1d4fc0e97005f5ba4abe.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[2]&call=url[file:/product/main]'
        alt="Product"
        className="product-image"/>
      <div>퍼프 슬리브 드레스</div>
      <div>₩49,900</div>
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
