import React from 'react'
import  Carousel  from 'react-elastic-carousel'
import './style.css';
import ProductCard from '../../Containers/ProductCardContainer';
import Slider from '../../Components/Slider';

const Home = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div className="home">
      <Slider />
      <div className="home-products">
        <h1 className="home-productsTitle">produtos:</h1>
        <Carousel breakPoints={breakPoints} className='carousel'>
        <ProductCard dataCurrent={{ productName: 'Prod 01', productPrice: 24.60.toFixed(2), productImg: 'https://img.icons8.com/emoji/256/coin-emoji.png' }} />
          <ProductCard dataCurrent={{ productName: 'Prod 02', productPrice: 25.40.toFixed(2), productImg: 'https://img.icons8.com/fluent/256/000000/stack-of-coins.png' }} />
        <ProductCard dataCurrent={{ productName: 'Prod 01', productPrice: 24.60.toFixed(2), productImg: 'https://img.icons8.com/emoji/256/coin-emoji.png' }} />
          <ProductCard dataCurrent={{ productName: 'Prod 02', productPrice: 25.40.toFixed(2), productImg: 'https://img.icons8.com/fluent/256/000000/stack-of-coins.png' }} />
        <ProductCard dataCurrent={{ productName: 'Prod 01', productPrice: 24.60.toFixed(2), productImg: 'https://img.icons8.com/emoji/256/coin-emoji.png' }} />
          <ProductCard dataCurrent={{ productName: 'Prod 02', productPrice: 25.40.toFixed(2), productImg: 'https://img.icons8.com/fluent/256/000000/stack-of-coins.png' }} />
        </Carousel>
        <div className="home-productsSilider">


        </div>
      </div>
    </div>
  )


}

export default Home;
