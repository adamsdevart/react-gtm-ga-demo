/**
 * Analytics utility functions
 * Handles dataLayer.push calls with proper error handling
 */

/**
 * Safely pushes events to dataLayer
 * @param {string} eventName - The name of the event
 * @param {Object} eventData - The event data object
 */
export const pushToDataLayer = (eventName, eventData) => {
  try {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData,
      });
      console.log("Analytics event pushed:", eventName, eventData);
    } else {
      console.log(
        "Analytics event (dataLayer not available):",
        eventName,
        eventData
      );
    }
  } catch (error) {
    console.error("Error pushing analytics event:", error);
  }
};

/**
 * Tracks purchase click events
 * @param {string} productName - The name of the product
 * @param {number} price - The price of the product
 */
export const trackPurchaseClick = (productName, price) => {
  pushToDataLayer("purchase_click", {
    product_name: productName,
    price: price,
  });
};

/**
 * Tracks product view events
 * @param {string} productName - The name of the product
 * @param {number} price - The price of the product
 */
export const trackViewProduct = (productName, price) => {
  pushToDataLayer("view_product", {
    product_name: productName,
    price: price,
  });
};

/**
 * Checks if dataLayer is available
 * @returns {boolean} - True if dataLayer is available
 */
export const isDataLayerAvailable = () => {
  return typeof window !== "undefined" && window.dataLayer;
};
