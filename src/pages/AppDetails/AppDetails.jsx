import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { getAppImage, iconDownloads, iconRatings, iconReview, appErrorImg } from '../../assets/images'
import appsData from '../../data/apps.json'
import './AppDetails.css'

const STORAGE_KEY = 'heroio_installed_apps'

function formatNum(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M'
  if (num >= 1000)    return (num / 1000).toFixed(0)    + 'K'
  return num
}

function AppDetails() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const app        = appsData.find(a => a.id === parseInt(id))

  const [installed, setInstalled] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return saved.some(a => a.id === parseInt(id))
  })

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  /* ── App not found ── */
  if (!app) {
    return (
      <div className="container">
        <div className="app-not-found">
          <img src={appErrorImg} alt="Not found" />
          <h2>OPPS!! APP NOT FOUND</h2>
          <p>The App you are requesting is not found on our system. please try another apps</p>
          <button onClick={() => navigate('/apps')}>Go Back!</button>
        </div>
      </div>
    )
  }

  function handleInstall() {
    const saved   = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, app]))
    setInstalled(true)
    toast.success(`${app.title} installed successfully!`)
  }

  return (
    <div className="app-details">
      <div className="container">

        {/* ── App Info Card ── */}
        <div className="details-card">
          <div className="details-top">

            <div className="details-img">
              <img src={getAppImage(app.id)} alt={app.title} />
            </div>

            <div className="details-info">
              <h1>{app.title}</h1>
              <p className="company">
                Developed by <span>{app.companyName}</span>
              </p>

              <hr className="details-divider" />

              <div className="details-stats">
                <div className="stat-box">
                  <img src={iconDownloads} alt="downloads" />
                  <p className="stat-box-label">Downloads</p>
                  <strong>{formatNum(app.downloads)}</strong>
                </div>
                <div className="stat-box">
                  <img src={iconRatings} alt="rating" />
                  <p className="stat-box-label">Average Ratings</p>
                  <strong>{app.ratingAvg}</strong>
                </div>
                <div className="stat-box">
                  <img src={iconReview} alt="reviews" />
                  <p className="stat-box-label">Total Reviews</p>
                  <strong>{formatNum(app.reviews)}</strong>
                </div>
              </div>

              <button
                className={`install-btn ${installed ? 'installed' : ''}`}
                onClick={handleInstall}
                disabled={installed}
              >
                {installed ? 'Installed' : `Install Now (${app.size} MB)`}
              </button>
            </div>

          </div>
        </div>

        {/* ── Ratings Chart ── */}
        <div className="ratings-card">
          <h2>Ratings</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              layout="vertical"
              data={[...app.ratings].reverse()}
              margin={{ top: 0, right: 24, left: 8, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={48}
              />
              <Tooltip
                formatter={v => [v.toLocaleString(), 'Reviews']}
                contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
              />
              <Bar dataKey="count" fill="#F59E0B" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Description ── */}
        <div className="description-card">
          <h2>Description</h2>
          <p>{app.description}</p>
          <p className="desc-meta">
            Size: <strong>{app.size} MB</strong> &nbsp;·&nbsp;
            Reviews: <strong>{app.reviews.toLocaleString()}</strong> &nbsp;·&nbsp;
            By: <strong>{app.companyName}</strong>
          </p>
        </div>

      </div>
    </div>
  )
}

export default AppDetails
