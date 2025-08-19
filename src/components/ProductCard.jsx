import { useProductVisibility } from "../hooks/useProductVisibility";
import { useAnalyticsTracking } from "../hooks/useAnalyticsTracking";

/**
 * ProductCard component displays individual product information
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {Function} props.onBuyClick - Callback for buy button click
 */
const ProductCard = ({ product, onBuyClick }) => {
  const productRef = useProductVisibility(product);
  const { trackPurchaseClick } = useAnalyticsTracking();

  const handleBuyClick = () => {
    trackPurchaseClick(product.name, product.price);
    onBuyClick(product);
  };

  return (
    <div ref={productRef} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card__image"
      />

      <h3 className="product-card__title">{product.name}</h3>

      <p className="product-card__description">{product.description}</p>

      <div className="product-card__price">${product.price.toFixed(2)}</div>

      <button
        onClick={handleBuyClick}
        className="product-card__button"
        aria-label={`Buy ${product.name} for $${product.price.toFixed(2)}`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
