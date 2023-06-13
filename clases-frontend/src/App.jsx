import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductsListContainer from './components/pages/productList/ProductsListContainer';
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer';
import CartContainer from './components/pages/cart/CartContainer';
import Layout from './components/layout/Layout';

const  App = () => {
  

   
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
        <Route path='/' element={<ProductsListContainer/>} />
        <Route path='/itemDetail' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartContainer/>} />
        </Route>
        
        <Route path='*' element={<h1>Page not found 404</h1>} />






      </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
