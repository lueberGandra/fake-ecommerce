import React from 'react';
import './style.css';

// import { Container } from './styles';

const ProductCard = () => {
    return (
        <div className="productCard">
            <div className="productCard-imgWrapper">
                <img src="https://img.icons8.com/emoji/256/coin-emoji.png" alt="" />
            </div>
            <div className="productCard-info">
                <h3 className="info-tittle">50 Coins</h3>
                <h4 className="info-price">R$50,00</h4>

                <button className="info-bttadd">
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