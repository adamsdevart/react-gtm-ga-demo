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

  return (
    <dialog
      ref={dialogRef}
      className="purchase-dialog"
      onClose={handleDialogClose}
      onClick={handleBackdropClick}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Moles tiae iure,
      aspernatur recusandae omnis ratione odit sint cumque tempore vel, fuga
      tempora nisi atque sequi cum velit sapiente enim quae harum.Í¸¸
    </dialog>
  );
};

export default PurchaseModal;
