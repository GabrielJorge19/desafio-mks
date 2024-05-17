import React, { SetStateAction, useContext } from 'react';
import { ReactComponent as LogoAdicionarAoCarrinho } from '../../../assets/logoAdicionarAoCarrinho.svg';
import { ContextCarrinho } from '../../../services/contexts';

export function Products({ products }: {products: Product[]}): React.JSX.Element {
    
    const { carrinho, setCarrinho } = useContext(ContextCarrinho);
    

    const adicionarFilme = (products: Product) => {
        setCarrinho!(prev => [...prev, { ...products, quant: 1 }]);
    }

    return <div style={styles.products}>
        {products.map((product) => {

            let price = product.price.trim().slice(0, product.price.indexOf('.'))
            let productOnCarrinho = carrinho!.find(item => item.id === product.id);
            let quant = (!!productOnCarrinho) ? productOnCarrinho.quant : 0;

            return <div key={product.id} style={styles.product}>
                <img src={product.photo} style={styles.imagem} alt="" />
                <div style={styles.productInfo}>
                    <p style={styles.titulo}>{product.name}</p>
                    <div style={styles.preco}>
                        <p style={{
                            backgroundColor: '#373737',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                        }}>
                            R${price}
                        </p>
                    </div>
                </div>
                <p style={styles.desc}>Redesigned from scratch and completely revised.</p>
                <div style={{...styles.botao, backgroundColor: (productOnCarrinho)?'#33964e':'#0F52BA'}}
                    onClick={() => {
                        if (quant === 0) adicionarFilme(product);
                    }}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <span style={styles.textoBotao}>{(productOnCarrinho)?'JÁ NO CARRINHO':'COMPRAR'}</span>
                </div>
            </div>
        })}
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100%',
        backgroundColor: '#2F2E41',
        minHeight: '100vh',
        paddingBottom: 30,
    },
    products: {
        width: '100%',
        maxWidth: '920px',
        display: 'flex',
        flexWrap: 'wrap',
        whiteSpace: 'wrap',
        justifyContent: 'space-between',
        gap: 15,
        padding: '20px 15px',
        margin: 'auto',
        fontFamily: 'Montserrat',
    },
    product: {
        height: '35vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5,
        // padding: '10px 0px 0px 0px',
        borderRadius: 10,
        overflow: 'hidden',
        flex: '1 0 200px',
        
        // minWidth: 300,
        boxShadow: '0px 0px 10px #ccc',
    },
    imagem: {
        // height: '200px',
        height: '50%',
        objectFit: 'contain',
    },
    productInfo: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '0px 10px',
        gap: 5,
    },
    titulo: {
        fontSize: '15px',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto 0px',
        textOverflow: 'ellipsis',
        flexShrink: 1,
    },
    preco: {
        fontWeight: '700',
        fontSize: '15px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    desc: {
        padding: '0px 10px',
        fontWeight: '200',
        fontSize: '13px',
        fontFamily: 'Montserrat',

    },
    botao: {
        width: '100%',
        // backgroundColor: '#0F52BA',
        padding: 10,
        border: 'none',
        color: 'white',
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    textoBotao: {
        // padding: 5,
        fontWeight: '200',
        fontSize: '12px',
    }

}