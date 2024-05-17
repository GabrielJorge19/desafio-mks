import React, { useContext } from "react";
import './index.css';
import { ContextCarrinho } from '../../services/contexts';


export function Carrinho({ carrinhoActive, setCarrinhoActive }: { carrinhoActive: boolean, setCarrinhoActive: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element {
    const { carrinho, setCarrinho } = useContext(ContextCarrinho);

    let style = (!carrinhoActive) ? {} : {
        width: '0%',
        minWidth: '0px',
        padding: 0,
    };

    let total = carrinho.reduce((t, prod) => {
        let value = Number(prod.price.trim().slice(0, prod.price.indexOf('.'))) * prod.quant;
        return t + value;
    }, 0);

    const removeProduct = (id: number) => {
        let car = [...carrinho];
        car = car.filter((prod) => prod.id != id);
        setCarrinho(car);
    }

    return <div style={{ ...styles.container, ...style }}>
        <div style={styles.header}>
            <h1 style={{ width: '60%' }}>Carrinho de compras</h1>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setCarrinhoActive(true)} style={{ cursor: 'pointer' }}>
                <circle cx="19" cy="19" r="19" fill="black" />
                <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
            </svg>
        </div>
        <div style={styles.products}>
            {carrinho!.map((product) => {
                let price = Number(product.price.trim().slice(0, product.price.indexOf('.'))) * product.quant;
                return <div style={styles.product} key={product.id}>
                    <div style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'center',
                        width: '50%',
                    }}>
                        <img src={product.photo} style={styles.img} />
                        <p style={styles.name}>{product.name}</p>
                    </div>
                    <div style={styles.quant}>
                        <p style={{
                            fontSize: 8
                        }}>Qtd:</p>
                        <div style={styles.quantButtons}>
                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                let car = [...carrinho];
                                car.map((prod) => {if(prod.id == product.id){prod.quant -= (prod.quant == 1)?0:1}});
                                setCarrinho(car);
                            }}>-</span>
                            <span style={{
                                borderLeft: '1px solid #ccc',
                                borderRight: '1px solid #ccc',
                                padding: '0px 7px',
                                fontSize: 11,
                                textAlign: 'center',
                            }}>{product.quant}</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                let car = [...carrinho];
                                car.map((prod) => {if(prod.id == product.id){prod.quant += (prod.quant == 5)?0:1}});
                                setCarrinho(car);
                            }}>+</span>
                        </div>
                    </div>
                    <p style={styles.price}>R${price}</p>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { removeProduct(product.id) }} style={styles.deleteProduct}>
                        <circle cx="19" cy="19" r="19" fill="black" />
                        <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                    </svg>
                </div>
            })}
        </div>
        <div style={styles.total}>
            <p>TOTAL:</p>
            <p>R$ {total}</p>
        </div>
        <button style={styles.button}>Finalzar Compra</button>
    </div>
}

let styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        width: '30%',
        minWidth: 400,
        height: '100vh',
        transition: 'all .3s',
        overflow: 'hidden',
        backgroundColor: '#0F52BA',
        boxShadow: '0 0 10px #000',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        // marginBottom: 40,
        padding: '40px 20px 20px',
    },
    products: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: 10,
        overflowY: 'auto',
        padding: '20px 20px 0px',
    },
    product: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '10px 20px',
        gap: 10,
        fontFamily: 'Montserrat',
    },
    deleteProduct: {
        width: 20,
        height: 20,
        transform: 'translate(10px, -10px)',
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    img: {
        width: '60px',
    },
    name: {
        fontSize: 15,
    },
    price: {
        fontWeight: 700,
    },
    quant: {
        alignSelf: 'flex-start',
        paddingTop: 12,
    },
    quantButtons: {
        border: '1px solid #ccc',
        borderRadius: 5,
        padding: '0px 7px',
        display: 'flex',
        gap: 3,
        alignItems: 'center',
    },






    total: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        fontWeight: 700,
        padding: '20px 40px',

    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 700,
        width: '100%',
        border: 'none',
        fontSize: 24,
        padding: 20,
        cursor: 'pointer',
    }
}