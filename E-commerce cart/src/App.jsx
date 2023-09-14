import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import  Shop  from './Pages/Shop/Shop'
import  Cart  from "./Pages/Cart/Cart";
import ShopContextProvider from "./Context/shop-context";


const App = () => {
  return ( 

    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop /> } />
          <Route path='/cart' element={ <Cart/> } />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}
 
export default App;


// all what is nexted inside the ShopContextProvider will have access to whatever we put in the provider