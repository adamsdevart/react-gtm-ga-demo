import { useModalState } from "../hooks/useModalState";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import PurchaseModal from "./PurchaseModal";

const ProductCatalog = () => {
  const { isOpen, selectedProduct, openModal, closeModal } = useModalState();

  const handleBuyClick = (product) => {
    openModal(product);
  };
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onBuyClick={handleBuyClick}
        />
      ))}

      <PurchaseModal
        isOpen={isOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductCatalog;
