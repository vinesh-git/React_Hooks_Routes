import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display : 'flex',flexDirection : 'row', justifyContent : 'space-evenly',width : '100%',border : '1px solid white'}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
    </nav>
  )
}

export default Navbar