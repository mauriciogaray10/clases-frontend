import './App.css';
import Navbar from './components/layout/navBar/Navbar.jsx';
import ProductsListContainer from './components/pages/productList/ProductsListContainer.jsx';


const  App = () => {
  let nombre = 'pepe';

   
  return (
    <div>
      <Navbar />
      <ProductsListContainer   />
    
    </div>
  );
}

export default App;
