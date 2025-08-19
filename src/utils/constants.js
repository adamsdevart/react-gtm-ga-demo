/**
 * Application constants
 * Centralized configuration and event names
 */

// Analytics event names
export const ANALYTICS_EVENTS = {
  PURCHASE_CLICK: 'purchase_click',
  VIEW_PRODUCT: 'view_product'
};

// Intersection Observer configuration
export const INTERSECTION_OPTIONS = {
  threshold: 0.5, // Trigger when 50% of the element is visible
  rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
};
