# React GTM/GA Demo Example

A React application demonstrating product listing with modal purchase flow and analytics tracking capabilities. Built with modern React patterns, clean architecture, and best practices.

## 🚀 Features

- **Product Display**: Clean, responsive product grid with 6 realistic products
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
│   └── components.css   # Component-specific styles
├── utils/               # Utility functions
│   ├── analytics.js     # Analytics utility functions
│   └── constants.js    # Application constants
├── data/                # Static data
│   └── products.js     # Product data
├── App.jsx             # Main app component
└── main.jsx           # App entry point
```

### Custom Hooks
- **`useModalState`**: Manages modal state with accessibility features
- **`useAnalyticsTracking`**: Provides analytics tracking functions
- **`useProductVisibility`**: Tracks when products enter viewport using IntersectionObserver

### Utility Functions
- **`analytics.js`**: Centralized analytics functions with error handling
- **`constants.js`**: Application constants and configuration

### CSS Architecture
- **CSS Custom Properties**: Consistent theming and easy customization
- **Responsive Design**: Mobile-first approach
- **Component-Specific Styles**: Organized and modular CSS

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-gtm-ga-demo-example
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

## 🎯 Event Contract

The application fires these analytics events:

### `purchase_click`
Fired when user clicks "Buy Now" button.

**Payload:**
```javascript
{
  event: 'purchase_click',
  product_name: 'Wireless Bluetooth Headphones',
  price: 89.99
}
```

### `view_product`
Fired when a product card enters the viewport (50% visible).

**Payload:**
```javascript
{
  event: 'view_product',
  product_name: 'Smart Fitness Watch',
  price: 199.99
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

### GTM/GA4 Integration
1. Add GTM snippet to `index.html`
2. Configure custom event triggers
3. Set up GA4 event tags
4. Test with GTM Preview mode

### Build Process
1. Run `npm run build`
2. Deploy `dist/` folder to your hosting service
3. Verify analytics events are firing correctly

## 🤝 Contributing

This is a demo project showcasing best practices for React applications with analytics integration. Feel free to use it as a reference or starting point for your own projects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
