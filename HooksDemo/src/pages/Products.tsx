import { useNavigate } from 'react-router-dom';
import './pagestyles.css';
import products from '../data/products';

function Products() {
    const navigate = useNavigate();
  return (
    <div className="product-page">
      <div className="product-header">
        <h2>Products to shop</h2>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
                <button key={product.id} className='productcard' onClick={()=> navigate(`/productdetails/${product.id}`)}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-meta">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">${product.price}</p>
                        <p className="product-short">{product.short}</p>
                    </div>
                </button>
            )
        })}
        </div>
    </div>
  )
}

export default Products