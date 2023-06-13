import Footer from "./footer/Footer";
import Navbar from "./navBar/Navbar";
import {Outlet} from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout