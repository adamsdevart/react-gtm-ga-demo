import { useModalState } from "../hooks/useModalState";
import ProductCard from "./ProductCard";
import PurchaseModal from "./PurchaseModal";
import { products } from "../data/products";

/**
 * ProductCatalog component displays the main product grid
 * Manages modal state and product interactions
 */
const ProductCatalog = () => {
  const { isOpen, selectedProduct, openModal, closeModal } = useModalState();

  const handleBuyClick = (product) => {
    openModal(product);
  };

  return (
    <div className="product-catalog">
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
