import './App.css';
import Navigations from './Customer/components/Navigation/Navigation';
import Carousel from './Customer/components/HomeCarousel/MainCarousel';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/components/Footer/Footer';
import Product from './Customer/components/Product/Product.jsx';



function App() {
  return (
    <div className="App">
      <div className=''>
          <Navigations/>
          {/* <HomePage/>  */}
          <Product/>
          
      </div>
      <Footer/>
    </div>
  );
}

export default App;
