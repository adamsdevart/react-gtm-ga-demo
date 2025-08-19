import { useEffect, useRef } from "react";

/**
 * PurchaseModal component for product purchase confirmation
 * Uses HTML5 dialog element for better accessibility and native modal behavior
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Callback to close modal
 * @param {Object} props.product - Product data to display
 */
const PurchaseModal = ({ isOpen, onClose, product }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) {
      // Show modal dialog - this automatically handles focus trapping and backdrop
      dialogRef.current.showModal();
    } else {
      // Close modal dialog
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Handle dialog close events
  const handleDialogClose = () => {
    onClose();
  };

  // Handle backdrop click (light dismiss)
  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop itself, not the dialog content
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!product) return null;

  const handleConfirmPurchase = () => {
    alert(`Purchase confirmed for ${product.name}!`);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="purchase-dialog"
      onClose={handleDialogClose}
      onClick={handleBackdropClick}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div className="dialog__content">
        <button
          onClick={onClose}
          className="dialog__close-button"
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>

        <img src={product.image} alt={product.name} className="dialog__image" />

        <h2 id="dialog-title" className="dialog__title">
          {product.name}
        </h2>

        <p id="dialog-description" className="dialog__description">
          {product.description}
        </p>

        <div className="dialog__price">${product.price.toFixed(2)}</div>

        <div className="dialog__actions">
          <button
            onClick={onClose}
            className="dialog__button dialog__button--secondary"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmPurchase}
            className="dialog__button dialog__button--primary"
            type="button"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PurchaseModal;
