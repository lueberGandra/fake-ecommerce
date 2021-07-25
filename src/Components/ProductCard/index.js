import React from 'react';
import './style.css';

const ProductCard = props => {
   
    const name = props.dataCurrent.productName,
    price = props.dataCurrent.productPrice,
    img = props.dataCurrent.productImg    
   
    return (
        <div className="productCard">
            <div className="productCard-imgWrapper">
                <img src={img} alt="" />
            </div>
            <div className="productCard-info">
                <h3 className="info-tittle">{name}</h3>
                <h4 className="info-price">{`R$ ${price}`}</h4>

                <button className="info-bttadd" onClick={
                    () => {props.addToCartHandler({name,price,img})}
                }>
                    <div className="btnWrapper-iconWrapper">
                        <img src="https://www.pngkey.com/png/full/231-2317482_white-shopping-cart-png-download-buy-icon-white.png" alt="" />
                    </div>
                    <h4>comprar</h4>
                </button>



            </div>
        </div>
    );
}

export default ProductCard;