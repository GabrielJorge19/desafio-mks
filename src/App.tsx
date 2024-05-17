import React, { useState } from "react";
import { Home } from "./pages/home/index";
import { ContextCarrinho, ContextProducts } from './services/contexts';
 


function App(): React.JSX.Element {

    const [carrinho, setCarrinho] = useState<ProductCarrinho[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <ContextCarrinho.Provider value={{ carrinho, setCarrinho }}>
            <ContextProducts.Provider value={{ products, setProducts }}>
                <Home />
                        {/* <Route path="/" Component={Home} /> */}
            </ContextProducts.Provider>
        </ContextCarrinho.Provider>
    );
}

export default App;
