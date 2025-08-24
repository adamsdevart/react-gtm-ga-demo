import { useEffect, useRef, useCallback } from "react";
import { trackViewProduct } from "../utils/analytics";
import { INTERSECTION_OPTIONS } from "../utils/constants";

/**
 * Custom hook for tracking product visibility using IntersectionObserver
 * @param {Object} product - The product object with name and price
 * @returns {React.RefObject} Ref to attach to the product element
 */
export const useProductVisibility = (product) => {
  const productRef = useRef(null);
  const hasTracked = useRef(false);
  const observerRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasTracked.current && product) {
        try {
          trackViewProduct(product.name, product.price);
          hasTracked.current = true;
        } catch (error) {
          console.error('Error tracking product view:', error);
        }
      }
    });
  }, [product]);

  useEffect(() => {
    // Reset tracking state when product changes
    hasTracked.current = false;

    if (!product || !product.name || !product.price) {
      console.warn('useProductVisibility: Invalid product data', product);
      return;
    }

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    try {
      observerRef.current = new IntersectionObserver(handleIntersection, INTERSECTION_OPTIONS);
    } catch (error) {
      console.error('Error creating IntersectionObserver:', error);
      return;
    }

    // Start observing
    if (productRef.current && observerRef.current) {
      observerRef.current.observe(productRef.current);
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [product, handleIntersection]);

  return productRef;
};
