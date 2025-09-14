import { useState } from 'react'
import { SiVite, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

function App() {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    console.log('🏴‍☠️ Button clicked! Current count:', count)
    setCount(prevCount => prevCount + 1)
    console.log('🚀 New count will be:', count + 1)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #7f1d1d, #b91c1c, #d97706, #b91c1c, #7f1d1d)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <img 
        src="/images/luffy-right.png" 
        alt="Luffy Left" 
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          width: '120px',
          height: '120px',
          zIndex: 10,
          transform: 'scaleX(-1)'
        }}
      />
      <img 
        src="/images/luffy-left.png" 
        alt="Luffy Right" 
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          width: '120px',
          height: '120px',
          zIndex: 10
        }}
      />
      
      <div style={{
        position: 'relative',
        zIndex: 20,
        background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.95), rgba(255, 237, 213, 0.95))',
        borderRadius: '30px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        maxWidth: '550px',
        width: '90%',
        border: '4px solid #d97706',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              color: '#7f1d1d', 
              margin: '0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontWeight: 'bold'
            }}>
              ONE PIECE
            </h1>
          </div>
          <h2 style={{ 
            fontSize: '24px', 
            color: '#d97706', 
            margin: '0 0 8px 0',
            fontWeight: 'bold'
          }}>
            🏴‍☠️ PIRATE ACADEMY 🏴‍☠️
          </h2>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  fontSize: '18px',
                  color: '#7f1d1d',
                  margin: '0',
                  fontWeight: '600'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SiVite style={{ color: '#646CFF', fontSize: '24px' }} />
                    <span>Vite</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SiReact style={{ color: '#61DAFB', fontSize: '24px' }} />
                    <span>React</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SiTypescript style={{ color: '#3178C6', fontSize: '24px' }} />
                    <span>TypeScript</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SiTailwindcss style={{ color: '#06B6D4', fontSize: '24px' }} />
                    <span>Tailwind</span>
                  </div>
                </div>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/luffyG5.png" 
            alt="Luffy Gear 5" 
            style={{
              width: '300px',
              height: '175px',
              margin: '0 auto 16px auto',
              display: 'block',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
            }}
          />
      </div>
        
        <button 
          onClick={handleClick}
          style={{
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
            border: '4px solid #d97706',
            borderRadius: '15px',
            padding: '20px 40px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#7f1d1d',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            marginBottom: '30px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'
            e.currentTarget.style.background = 'linear-gradient(45deg, #fcd34d, #fbbf24)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.background = 'linear-gradient(45deg, #fbbf24, #f59e0b)'
          }}
        >
          💰 BOUNTY: {count.toLocaleString()} BERRIES 💰
        </button>
          <p style={{ 
            fontSize: '16px', 
            color: '#d97706', 
            margin: '16px 0',
            fontWeight: 'bold'
          }}>
            🌊 Ready to sail the Grand Line! Set your dreams and adventure awaits! 🌊
          </p>
        
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '16px',
          background: 'linear-gradient(to right, #d97706, #f59e0b, #7f1d1d)',
          borderRadius: '0 0 26px 26px'
        }}></div>
      </div>
      
    </div>
  )
}

export default App
