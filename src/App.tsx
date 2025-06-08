import './App.css'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        // 페이지가 로드되자마자 리다이렉트 시도
        window.location.href = 'sangle://nfcpos/3'
    }, [])

    const handleRedirect = () => {
        window.location.href = 'sangle://nfcpos/3'
    }

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
    )
}

export default App
