import React from "react";
import { useNavigate } from "react-router-dom";


export function BackButton(): React.JSX.Element{
    const navigate = useNavigate();

    return <button style={styles.botao} onClick={() => navigate('/')} >VOLTAR</button>
}

const styles: { [key: string]: React.CSSProperties } = {
    botao: {
        backgroundColor: '#009EDD',
        color: 'white',
        borderRadius: 4,
        border: 'none',
        padding: '12px 60px',
        fontWeight: '700',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
    }
};
