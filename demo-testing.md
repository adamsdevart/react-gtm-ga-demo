# Demo Testing Guide

## Quick Test Checklist

### 1. Basic Functionality
- [ ] App loads without errors
- [ ] 5 products display correctly with images, names, prices, and descriptions
- [ ] "Buy Now" buttons are visible and clickable
- [ ] Modal opens when "Buy Now" is clicked
- [ ] Modal shows product details and confirmation buttons
- [ ] Modal closes when "Cancel" or "×" is clicked
- [ ] "Confirm Purchase" shows alert and closes modal

### 2. Analytics Testing
- [ ] Open browser console to see analytics logs
- [ ] Scroll down to view products (should see `view_product` events)
- [ ] Click "Buy Now" buttons (should see `purchase_click` events)
- [ ] Check that events include product_name and price parameters

### 3. GTM Preview Testing
1. Go to GTM and click "Preview"
2. Enter your website URL
3. Test the following actions:
   - Scroll to view products → Should fire `view_product` events
   - Click "Buy Now" buttons → Should fire `purchase_click` events
4. Verify event parameters in GTM Preview panel

### 4. GA4 DebugView Testing
1. Go to GA4 DebugView
2. Ensure you're in debug mode (use GA Debugger extension or debug mode)
3. Perform the same actions as above
4. Verify events appear in DebugView with correct parameters

## Console Commands for Testing

```javascript
// Check if dataLayer exists
console.log('DataLayer:', window.dataLayer);

// Manually trigger events for testing
window.dataLayer.push({
  event: 'purchase_click',
  product_name: 'Test Product',
  price: 99.99,
  currency: 'USD'
});

// Clear dataLayer for fresh testing
window.dataLayer = [];
```

## Common Issues & Solutions

### Issue: Events not firing
**Solution**: Check browser console for errors, ensure GTM container ID is correct

### Issue: Parameters missing in GA4
**Solution**: Verify Data Layer Variables are created in GTM

### Issue: Modal not opening
**Solution**: Check if dialog element is supported in browser

### Issue: Intersection Observer not working
**Solution**: Ensure browser supports IntersectionObserver API

## Interview Demo Script

1. **Introduction** (30 seconds)
   - "This is a React application that demonstrates product listing with analytics tracking"
   - "It uses custom hooks, GTM, and GA4 for comprehensive event tracking"

2. **Show the App** (1 minute)
   - Scroll through products to show responsive design
   - Click "Buy Now" to show modal functionality
   - Highlight accessibility features (keyboard navigation, ARIA)

3. **Code Walkthrough** (2 minutes)
   - Show custom hooks: `useModalState`, `useAnalyticsTracking`, `useProductVisibility`
   - Explain hook composition
   - Show analytics utility with error handling

4. **GTM Preview Demo** (2 minutes)
   - Open GTM Preview mode
   - Show events firing when scrolling and clicking
   - Point out event parameters

5. **GA4 DebugView Demo** (1 minute)
   - Show events being received in GA4
   - Highlight parameter mapping

6. **GA4 Report Demo** (1 minute)
   - Show exploration report with purchase_click events
   - Demonstrate breakdown by product name

7. **Q&A** (2 minutes)
   - Be ready to explain technical decisions
   - Discuss scalability and improvements

## Key Technical Points to Mention

- **Custom Hooks**: Demonstrate React best practices
- **Error Handling**: Robust analytics with fallbacks
- **Accessibility**: ARIA attributes, keyboard navigation
- **Performance**: IntersectionObserver for efficient tracking
- **Maintainability**: Clean architecture, separation of concerns
- **Scalability**: Easy to add new events and products
