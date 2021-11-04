import NavBar from "./components/NavBar"
import Main from "./components/Main"

//CONTEXT
import { ContextMenuModalProvider } from './context/ContextMenuModal';
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="container">
      <ContextMenuModalProvider>
        <ProductContextProvider>
          <NavBar />
          <Main />
        </ProductContextProvider>
      </ContextMenuModalProvider>
    </div>
  );
}

export default App;
