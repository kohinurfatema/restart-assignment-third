import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AllApps from './pages/AllApps/AllApps'
import AppDetails from './pages/AppDetails/AppDetails'
import MyInstallation from './pages/MyInstallation/MyInstallation'
import ErrorPage from './pages/ErrorPage/ErrorPage'
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
            <Route path="/"             element={<Home />} />
            <Route path="/apps"         element={<AllApps />} />
            <Route path="/apps/:id"     element={<AppDetails />} />
            <Route path="/installation" element={<MyInstallation />} />
            <Route path="*"             element={<ErrorPage />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
