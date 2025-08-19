const ProductCard = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <button className="product-card__button" onClick={handleBuyClick}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
