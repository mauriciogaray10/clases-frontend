

const ProductsListPresentacional = ({counter, setCounter}) => {
  return (
    <div>
        <h1>Bienvenidos al Super Coderhouse!</h1>
        <h2>Lista de productos</h2>
        <h3>{counter}</h3>
        <button onClick={()=>{setCounter(counter + 1)}}>Sumar</button>
    </div>
  )
}

export default ProductsListPresentacional