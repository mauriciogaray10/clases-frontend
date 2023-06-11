import { useState, useEffect } from "react";

const ProductsListContainer = () => {
    const [counter, setCounter] = useState(0);
  
    console.log('El componente se actualiza');
    
    useEffect(()=>{
      console.log('Se hace la peticion a la API')
    }, [])
  
    useEffect(()=>{
      console.log('Me ejecuto de forma condicional')
    }, [counter])
  
    return (
   <ProductsListContainer counter = />
  )
}

export default ProductsListContainer