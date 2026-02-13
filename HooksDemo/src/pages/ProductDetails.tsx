import { useParams, useNavigate } from "react-router-dom";
import products from '../data/products';
import './pagestyles.css';

function ProductDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const product = products.find(p => p.id === pid);

  if(!product) {
    return (
      <div className="product-details">
        <p>Product not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    )
  }

  return (
  <div className="product-details">
    <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
    <div className="details-card">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-meta">
        <h2 className="details-title">{product.name}</h2>
        <p className="details-price">${product.price}</p>
        <p className="details-desc">{product.description}</p>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails