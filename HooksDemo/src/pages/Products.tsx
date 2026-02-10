import { useNavigate } from 'react-router-dom';
import './pagestyles.css';
function Products() {
    const productlist  = [
        {id : 1, name : "laptop"},
        {id : 2, name : "mobile"},
        {id : 3, name : "headphones"},
        {id : 4, name : "bluthood speaker"},
        {id : 5, name : "speaker"},
        {id : 6, name : "bluethooth headphones"},
        {id : 7, name : "hair dryer"},
        {id : 8, name : "hair straighner"}
    ];
    const navigate = useNavigate();
  return (
    <div style={{display : 'flex',flexDirection : 'column' ,justifyContent :'center',alignItems : 'center'}}>
        <h2>Products to shop</h2>
        <div style={{display : 'flex' , flexDirection : 'row',margin : 20,padding : 20}}>
            {productlist.map((product) => {
            return (
                <button key={product.id} className='productcard' onClick={()=> navigate(`/productdetails/${product.id}`)}>
                    <p>{product.name}</p>
                </button>
                // <Link to={`/productdetails/${product.id}`}>{product.name}</Link>
            )
        })}
        </div>
        
    </div>
  )
}

export default Products