import './App.css';
import FetchingDeDatos from './components/fetchingDeDatos/FetchingDeDatos.jsx';
import Navbar from './components/layout/navBar/Navbar.jsx'
import ProductsListContainer from './components/pages/productList/ProductsListContainer.jsx';


const  App = () => {

   
  return (
    <div>
     {/* <Navbar/>
      <ProductsListContainer />
       */}
       <FetchingDeDatos/>
    </div>
  );
}

export default App;
