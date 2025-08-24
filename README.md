# React GTM/GA4 Demo - Home Assignment

A React application demonstrating product listing with modal purchase flow and comprehensive analytics tracking. Built with modern React patterns, custom hooks, and Google Tag Manager integration.

## 🎯 Assignment Requirements Met

### ✅ Task 1 – React Component (Hooks Required)
- **Product List**: Displays 5 products with name, price, and image
- **Buy Now Button**: Each product has a "Buy Now" button
- **Modal Confirmation**: Popup/modal with confirmation message when "Buy Now" is clicked
- **Purchase Event**: Triggers `purchase_click` event in the code
- **Functional Components**: Uses React hooks (useState, useEffect, useCallback, useRef)
- **Custom Hooks**: 
  - `useModalState` - Manages modal state and accessibility
  - `useAnalyticsTracking` - Provides analytics tracking functions
  - `useProductVisibility` - Tracks when products enter viewport
- **Hook Composition**: Custom hooks work together seamlessly

### ✅ Task 2 – GTM & GA4 Event Tracking
- **GTM Setup**: Google Tag Manager container configured
- **GA4 Integration**: Google Analytics 4 property connected
- **Event Tracking**: 
  - `purchase_click` event with product name and price parameters
  - `view_product` event when products enter viewport
- **Live Demo Ready**: Events fire correctly for GTM Preview and GA4 DebugView

### ✅ Task 3 – Bonus Features
- **View Product Event**: Fires when product cards enter viewport (scroll-based)
- **GA4 Report Ready**: Events include proper parameters for breakdown by product name

## 🚀 Features

- **Product Display**: Clean, responsive product grid with 5 realistic products
- **Purchase Flow**: Modal confirmation dialog with accessibility features
- **Analytics Ready**: Custom hooks for tracking purchase clicks and product impressions
- **Modern React**: Functional components with hooks and proper separation of concerns
- **Clean Architecture**: Well-organized file structure with utilities and constants
- **CSS Best Practices**: CSS custom properties, responsive design
- **Accessibility**: ARIA attributes, keyboard navigation, focus management

## 🏗️ Architecture

### File Structure
```
src/
├── components/           # React components
│   ├── ProductCard.jsx   # Individual product display
│   ├── ProductCatalog.jsx # Main product grid container
│   └── PurchaseModal.jsx # Purchase confirmation dialog
├── hooks/               # Custom React hooks
│   ├── useModalState.js # Modal state management
│   ├── useAnalyticsTracking.js # Analytics tracking
│   └── useProductVisibility.js # Viewport tracking
├── styles/              # CSS files
│   ├── global.css       # Global styles and CSS variables
│   └── App.css          # Component-specific styles
├── utils/               # Utility functions
│   ├── analytics.js     # Analytics utility functions
│   └── constants.js     # Application constants
├── data/                # Static data
│   └── products.js      # Product data
├── App.jsx              # Main app component
└── main.jsx             # App entry point
```

### Custom Hooks
- **`useModalState`**: Manages modal state with accessibility features
- **`useAnalyticsTracking`**: Provides analytics tracking functions
- **`useProductVisibility`**: Tracks when products enter viewport using IntersectionObserver

### Utility Functions
- **`analytics.js`**: Centralized analytics functions with error handling
- **`constants.js`**: Application constants and configuration

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-gtm-ga-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 GTM & GA4 Setup Instructions

### Step 1: Create GTM Container
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new account and container
3. Note your GTM Container ID (format: GTM-XXXXXXX)

### Step 2: Update GTM Container ID
Replace `GTM-XXXXXXX` in `index.html` with your actual GTM Container ID:
```html
<!-- In the GTM script -->
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
```

### Step 3: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Note your Measurement ID (format: G-XXXXXXXXXX)

### Step 4: Configure GTM Tags
In GTM, create the following tags:

#### GA4 Configuration Tag
- **Tag Type**: Google Analytics: GA4 Configuration
- **Measurement ID**: Your GA4 Measurement ID
- **Trigger**: All Pages

#### Purchase Click Event Tag
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: purchase_click
- **Event Parameters**:
  - `product_name` (Data Layer Variable: product_name)
  - `price` (Data Layer Variable: price)
  - `currency` (Data Layer Variable: currency)
- **Trigger**: Custom Event - Event Name: purchase_click

#### View Product Event Tag
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: view_product
- **Event Parameters**:
  - `product_name` (Data Layer Variable: product_name)
  - `price` (Data Layer Variable: price)
  - `currency` (Data Layer Variable: currency)
- **Trigger**: Custom Event - Event Name: view_product

### Step 5: Create Data Layer Variables
In GTM, create these Data Layer Variables:
- `product_name` (Data Layer Variable Name: product_name)
- `price` (Data Layer Variable Name: price)
- `currency` (Data Layer Variable Name: currency)

### Step 6: Test with GTM Preview
1. Click "Preview" in GTM
2. Enter your website URL
3. Test the following actions:
   - Scroll to view products (should fire `view_product` events)
   - Click "Buy Now" buttons (should fire `purchase_click` events)

### Step 7: Verify in GA4 DebugView
1. Go to GA4 DebugView
2. Ensure events are being received with correct parameters

## 🎯 Event Contract

The application fires these analytics events:

### `purchase_click`
Fired when user clicks "Buy Now" button.

**Payload:**
```javascript
{
  event: 'purchase_click',
  product_name: 'Nebula Mug',
  price: 12.99,
  currency: 'USD',
  event_category: 'ecommerce',
  event_action: 'purchase_click',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

### `view_product`
Fired when a product card enters the viewport (50% visible).

**Payload:**
```javascript
{
  event: 'view_product',
  product_name: 'Cosmic Tee',
  price: 24.5,
  currency: 'USD',
  event_category: 'ecommerce',
  event_action: 'view_product',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Quality
- ESLint configuration with React-specific rules
- Consistent code formatting
- Proper error handling
- Accessibility best practices

## 🎨 Styling

The application uses a clean, modern design with:
- Responsive grid layout
- Hover effects and smooth transitions
- Consistent spacing and typography
- Mobile-first responsive design
- CSS custom properties for theming

## ♿ Accessibility

- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management in modals
- Semantic HTML structure
- Proper alt text for images

## 🚀 Production Deployment

### Build Process
1. Run `npm run build`
2. Deploy `dist/` folder to your hosting service
3. Verify analytics events are firing correctly

### GTM/GA4 Verification
1. Use GTM Preview mode to test events
2. Check GA4 DebugView for event reception
3. Create GA4 Exploration report showing:
   - Event count for purchase_click
   - Breakdown by product_name parameter

## 📊 GA4 Report Setup

### Create Exploration Report
1. Go to GA4 → Explore
2. Create new exploration
3. Add dimensions: Event name, Product name
4. Add metrics: Event count
5. Filter for purchase_click events
6. View breakdown by product name

## 🤝 Interview Demo Preparation

### What to Demonstrate
1. **GTM Preview Mode**: Show events firing when:
   - Scrolling to view products
   - Clicking "Buy Now" buttons
2. **GA4 DebugView**: Show events being received with parameters
3. **Code Walkthrough**: Explain custom hooks and analytics implementation
4. **GA4 Report**: Show exploration with purchase_click events by product

### Key Points to Highlight
- Custom hooks implementation
- Hook composition (useProductVisibility uses useAnalyticsTracking)
- Error handling in analytics
- Accessibility features
- Responsive design
- Clean code architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
