import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AllApps from './pages/AllApps/AllApps'
import Loading from './components/Loading/Loading'
import './App.css'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {loading ? <Loading /> : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
