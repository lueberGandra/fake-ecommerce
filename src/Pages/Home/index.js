import './style.css';
import ProductCard from '../../Components/ProductCard';
import Slider from '../../Components/Slider';

const Home=()=> {
  return (
    <div className="home">
    <Slider/>
    <ProductCard />
    </div>
  )


}

export default Home;
