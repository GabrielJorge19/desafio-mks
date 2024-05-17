declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Filme {
  id: number,
  title: string,
  price: number,
  image: string,
}

interface Product {
  id: integer,
  name: string,
  brand: string,
  description: string,
  price: string,
  createdAt: string,
  photo: string,
  updatedAt: string,
}


interface ProductCarrinho extends Product {
  quant: number;
}

interface DisplayFilmesPropsInterface {
  carrinho: ProductCarrinho[],
  setQuantidade: (a: number, b: number) => void,
  removerFilme: (a: number) => void,
}

