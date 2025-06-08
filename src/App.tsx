import './App.css';
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paramValue = params.get('param');

        if (paramValue) {
            window.location.href = `sangle://nfcpos/${paramValue}`;
        }
    }, []);

    const handleRedirect = () => {
        const params = new URLSearchParams(window.location.search);
        const paramValue = params.get('param') || 'default'; // 기본값도 설정 가능
        window.location.href = `sangle://nfcpos/${paramValue}`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <h1>포인트 정립하기</h1>
            <button
                onClick={handleRedirect}
                style={{
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    backgroundColor: '#5fcf16',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px'
                }}
            >
                생글로 이동
            </button>
        </div>
    );
}

export default App;
