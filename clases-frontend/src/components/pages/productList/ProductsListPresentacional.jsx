
const ProductsListPresentacional = ({counter, setCounter}) => {
  return (
    <>
    
    <h2>{counter}</h2>
    <button onClick={()=>{setCounter(counter + 1)}}> Sumar </button>

    
    
    </>
  )
}

export default ProductsListPresentacional;