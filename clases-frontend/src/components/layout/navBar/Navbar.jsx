import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <h4>
        Imagen
      </h4>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <Link to='/cart'>Ir al carrito</Link>
  
    </div>

  )
}

export default Navbar