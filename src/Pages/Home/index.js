import './style.css';
import ProductCard from '../../Components/ProductCard';
import Slider from '../../Components/Slider';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home-products">
        <h1 className="home-productsTitle">produtos:</h1>
        <div className="home-productsSilider">
          <ProductCard data={{ pruductQt: 50, productName: 'coins', productPrice: 24.90 }} />
        </div>
      </div>
    </div>
  )


}

export default Home;
