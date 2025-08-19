import ProductCatalog from "./components/ProductCatalog";
import "./styles/App.css";

/**
 * Main App component
 * Renders the product catalog application
 */
function App() {
  return (
    <div className="App">
      <main>
        <ProductCatalog />
      </main>
    </div>
  );
}

export default App;
