import React from 'react';
import './loading.css';


export function Loading(): React.JSX.Element {

    return <div style={styles.container}>
        <div style={styles.circleOut} className="spin">
            <div style={styles.circleIn} />
        </div>
    </div>
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleOut: {
        animation: 'roatate 3s linear infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'conic-gradient(from 90deg at 50% 50%, rgba(128, 128, 128, 0.0001) -46.17deg, #E6E6E6 313.55deg, rgba(128, 128, 128, 0.0001) 313.83deg, #E6E6E6 673.55deg)',
    },
    circleIn: {
        width: 'calc(100% - 5px)',
        height: 'calc(100% - 5px)',
        backgroundColor: '#2F2E41',
        borderRadius: '50%',
    }
}