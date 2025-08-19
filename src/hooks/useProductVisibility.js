import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!product || hasTracked.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTracked.current) {
          trackViewProduct(product.name, product.price);
          hasTracked.current = true;
        }
      });
    }, INTERSECTION_OPTIONS);

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, [product]);

  return productRef;
};
