import ProductCatalog from "./components/ProductCatalog";
import "./styles/App.css";

/**
 * Main App component
 * Renders the product catalog application
 */
function App() {
  return (
    <div className="App">
      <header>
        <h1>Product Card</h1>
      </header>
      <main>
        <ProductCatalog />
      </main>
    </div>
  );
}

export default App;
