import { Link, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
        <nav style={{display : 'flex',flexDirection : 'row', justifyContent : 'space-evenly',width : '100%' }}>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'dasboard'}>Dashboard</Link>
            <Link to={'products'}>Products</Link>
        </nav>
        <hr />
        <Outlet/>
    </div>
  )
}

export default MainLayout