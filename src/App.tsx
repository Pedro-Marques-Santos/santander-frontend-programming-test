import { GlobalStyle } from "./styles/global";
import { Home } from "./page/Home";
import { ProductsProvider } from "./context/products";

function App() {
  return (
    <ProductsProvider>
      <Home />
      <GlobalStyle />
    </ProductsProvider>
  );
}

export default App;
