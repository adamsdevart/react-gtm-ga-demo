/**
 * Analytics utility functions
 * Handles dataLayer.push calls with proper error handling and validation
 */

/**
 * Safely pushes events to dataLayer with validation
 * @param {string} eventName - The name of the event
 * @param {Object} eventData - The event data object
 */
export const pushToDataLayer = (eventName, eventData = {}) => {
  try {
    // Validate inputs
    if (!eventName || typeof eventName !== "string") {
      console.error("Analytics: Invalid event name provided:", eventName);
      return;
    }

    // Ensure dataLayer exists
    if (typeof window === "undefined") {
      console.log("Analytics: Window not available (SSR)");
      return;
    }

    if (!window.dataLayer) {
      window.dataLayer = [];
      console.warn("Analytics: dataLayer not found, creating new one");
    }

    // Create event object
    const eventObject = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData,
    };

    // Push to dataLayer
    window.dataLayer.push(eventObject);

    // Log for debugging (only in development)
    if (import.meta.env.DEV) {
      console.log("Analytics event pushed:", eventObject);
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
  if (!productName || !price) {
    console.error("Analytics: Missing required parameters for purchase_click", {
      productName,
      price,
    });
    return;
  }

  pushToDataLayer("purchase_click", {
    product_name: productName,
    price: parseFloat(price),
    currency: "USD",
    event_category: "ecommerce",
    event_action: "purchase_click",
  });
};

/**
 * Tracks product view events
 * @param {string} productName - The name of the product
 * @param {number} price - The price of the product
 */
export const trackViewProduct = (productName, price) => {
  if (!productName || !price) {
    console.error("Analytics: Missing required parameters for view_product", {
      productName,
      price,
    });
    return;
  }

  pushToDataLayer("view_product", {
    product_name: productName,
    price: parseFloat(price),
    currency: "USD",
    event_category: "ecommerce",
    event_action: "view_product",
  });
};

/**
 * Checks if dataLayer is available
 * @returns {boolean} - True if dataLayer is available
 */
export const isDataLayerAvailable = () => {
  return typeof window !== "undefined" && window.dataLayer;
};

/**
 * Gets the current dataLayer for debugging
 * @returns {Array} - Current dataLayer array
 */
export const getDataLayer = () => {
  return typeof window !== "undefined" ? window.dataLayer : [];
};

/**
 * Clears the dataLayer (useful for testing)
 */
export const clearDataLayer = () => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer = [];
  }
};
