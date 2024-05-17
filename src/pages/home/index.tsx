import React, { useEffect } from "react";
import { useContext } from "react";
import { Header } from '../../components/header/index';
import { ContextCarrinho, ContextProducts } from '../../services/contexts';
import { Products } from './partes/filmes';
import { Loading } from './partes/loading';

export function Home(): React.JSX.Element {
    const { carrinho, setCarrinho } = useContext(ContextCarrinho);
    const { products, setProducts } = useContext(ContextProducts);

    useEffect(() => {
        fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
            .then((response) => response.json())
            .then((response) => {
                // setTimeout(() => {          // Pausa adicionada apenas para simular o carregamento.
                // console.log(response);
                setProducts!(response.products);
                // }, 2500);
            });
    }, []);

    return <div style={styles.container}>
        <Header />
        {(products!.length > 0) ?
            // <Products products={products!} carrinho={carrinho!} setCarrinho={setCarrinho!} />
            <Products products={products!} />
            : <Loading />
        }
        <footer style={styles.footer}>
            <p>MKS sistemas © Todos os direitos reservados</p>
        </footer>
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        minHeight: '100vh',
        // paddingBottom: 30,
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        padding: 5,
        fontFamily: 'Montserrat',
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "14.63px",
        textAlign: "left",

    }
}