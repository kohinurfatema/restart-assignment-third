import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAppImage, iconDownloads, iconRatings } from '../../assets/images'
import './MyInstallation.css'

const STORAGE_KEY = 'heroio_installed_apps'

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M'
  if (num >= 1000)    return (num / 1000).toFixed(0)    + 'K'
  return num
}

function MyInstallation() {
  const navigate = useNavigate()
  const [sort, setSort] = useState('default')

  const [installedApps, setInstalledApps] = useState(() =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  )

  function handleUninstall(app) {
    const updated = installedApps.filter(a => a.id !== app.id)
    setInstalledApps(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    toast.error(`${app.title} has been uninstalled`)
  }

  let displayed = [...installedApps]
  if (sort === 'high-low') displayed.sort((a, b) => b.size - a.size)
  if (sort === 'low-high') displayed.sort((a, b) => a.size - b.size)

  return (
    <div className="installation">
      <div className="container">

        {/* Title */}
        <div className="inst-title">
          <h1>Your Installed Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        {/* Bar */}
        <div className="inst-bar">
          <span className="inst-count">{displayed.length} Apps Found</span>
          <select
            className="inst-sort"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Sort By Size</option>
            <option value="high-low">High - Low</option>
            <option value="low-high">Low - High</option>
          </select>
        </div>

        {/* List */}
        {displayed.length === 0 ? (
          <div className="no-installed">
            <p>No Installed Apps</p>
            <span>Go install some apps first</span>
            <button onClick={() => navigate('/apps')}>Browse Apps</button>
          </div>
        ) : (
          <div className="installed-list">
            {displayed.map(app => (
              <div key={app.id} className="inst-card">
                <div className="inst-card-img">
                  <img src={getAppImage(app.id)} alt={app.title} />
                </div>
                <div className="inst-card-info">
                  <h3>{app.title}</h3>
                  <div className="inst-meta">
                    <span className="inst-dl">
                      <img src={iconDownloads} alt="" />
                      {formatDownloads(app.downloads)}
                    </span>
                    <span className="inst-rt">
                      <img src={iconRatings} alt="" />
                      {app.ratingAvg}
                    </span>
                    <span className="inst-size">{app.size} MB</span>
                  </div>
                </div>
                <button className="uninstall-btn" onClick={() => handleUninstall(app)}>
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default MyInstallation
