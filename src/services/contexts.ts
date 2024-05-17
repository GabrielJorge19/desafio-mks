import React, { createContext, SetStateAction } from 'react';

interface ContextCarrinhoType {
  carrinho: ProductCarrinho[],
  setCarrinho: React.Dispatch<SetStateAction<ProductCarrinho[]>>;
}
interface ContextProductsType {
  products?: Product[],
  setProducts?: React.Dispatch<SetStateAction<Product[]>>,
}

export const ContextCarrinho = createContext<ContextCarrinhoType>({} as ContextCarrinhoType);
export const ContextProducts = createContext<ContextProductsType>({products: []});

