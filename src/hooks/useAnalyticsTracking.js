import { trackPurchaseClick, trackViewProduct } from "../utils/analytics";

/**
 * Custom hook for analytics tracking
 * Provides tracking functions for purchase clicks and product views
 * @returns {Object} Analytics tracking functions
 */
export const useAnalyticsTracking = () => {
  return {
    trackPurchaseClick,
    trackViewProduct,
  };
};
