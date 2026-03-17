import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <div style={{ textAlign: 'center', padding: '80px 24px', color: '#64748b' }}>
          <h2>Pages coming soon...</h2>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
