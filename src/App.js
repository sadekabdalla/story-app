import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import ProductsList from './Components/ProductsList';
import About from './Components/About';
import ProductDetalis from './Components/ProductDetalis';
import './App.css';
import { BrowserRouter as Routers , Route,Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Routers>
      <Navbar/>
      <Routes>
        <Route path='/' element={<>
        <Slider/>
        <ProductsList/>
        </>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='product/:productID' element={<ProductDetalis/> } />
      </Routes>
      </Routers>
    
    
    
    </div>
  );
}

export default App;
