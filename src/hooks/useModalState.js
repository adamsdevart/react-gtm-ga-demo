import { useState, useCallback } from "react";

/**
 * Custom hook for managing modal state
 * HTML5 dialog element handles accessibility features automatically
 * @returns {Object} Modal state and handlers
 */
export const useModalState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = useCallback((product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedProduct(null);
  }, []);

  return {
    isOpen,
    selectedProduct,
    openModal,
    closeModal,
  };
};
