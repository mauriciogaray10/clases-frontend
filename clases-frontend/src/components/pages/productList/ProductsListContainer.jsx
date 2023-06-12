import ProductsListPresentacional from "./ProductsListPresentacional.jsx"
import { useState, useEffect } from "react"


const ProductsListContainer = () => {
    const [counter, setCounter] = useState(0)
    useEffect( () =>
      {  const tarea = new Promise ( (resolve, reject) =>{
        resolve('La tarea se resolvió')
    })
    console.log(tarea);

    tarea.then( (res)=>{console.log(res);}).catch((err)=>{})}, []);

 
    return <ProductsListPresentacional counter = {counter} setCounter = {setCounter} />
  
}

export default ProductsListContainer;