import ProductsListPresentacional from "./ProductsListPresentacional.jsx"
import { useState, useEffect } from "react"

const ProductsListContainer = () => {

    const [counter, setCounter] = useState(0);
    useEffect(() =>{
        console.log('Llamado a la API');
    }, [counter])
 
    return (
    <ProductsListPresentacional counter = {counter} setCounter={setCounter} />
  )
}

export default ProductsListContainer;