import { useNavigate } from 'react-router-dom'
import appsData from '../../data/apps.json'
import { heroImg, iconDownloads, iconRatings, getAppImage } from '../../assets/images'
import './Home.css'

const totalDownloads = appsData.reduce((sum, app) => sum + app.downloads, 0)
const totalReviews   = appsData.reduce((sum, app) => sum + app.reviews, 0)

function formatNum(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000)    return (num / 1000).toFixed(0)    + 'K'
  return num
}
function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M'
  if (num >= 1000)    return (num / 1000).toFixed(0)    + 'K'
  return num
}

function Home() {
  const navigate = useNavigate()
  const topApps  = appsData.slice(0, 8)

  return (
    <div className="home">

      {/* ── Banner ── */}
      <section className="banner">
        <div className="container">

          {/* dashed box — text + buttons only */}
          <div className="banner-box">
            <h1>We Build<br /><span className="highlight">Productive</span> Apps</h1>
            <p>
              At HERO.IO , we craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting. Our goal is to turn your ideas into digital
              experiences that truly make an impact.
            </p>
            <div className="banner-btns">
              <a href="https://play.google.com" target="_blank" rel="noreferrer" className="btn-store">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#00C853">
                  <path d="M3.18 23.76c.35.19.75.24 1.15.12l12.48-7.21-2.79-2.79-10.84 9.88zM.32 1.98C.12 2.33 0 2.75 0 3.24v17.52c0 .49.12.91.33 1.26l.07.07 9.82-9.82v-.23L.39 1.91l-.07.07zM20.27 10.3l-2.55-1.47-3.1 3.1 3.1 3.1 2.57-1.48c.73-.42.73-1.11-.02-1.53v-.72zM4.33.12L16.81 7.33l-2.79 2.79L3.18.24C3.58.12 3.98.16 4.33.12z"/>
                </svg>
                Google Play
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="btn-store">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#007AFF">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* phone — outside the dashed box, centered below */}
          <div className="phone-section">
            <img src={heroImg} alt="App preview" className="phone-img" />
          </div>

        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-box">
            <h2>Trusted By Millions, Built For You</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-label">Total Downloads</p>
                <h3>{formatNum(totalDownloads)}</h3>
                <p className="stat-sub">21% More Than Last Month</p>
              </div>
              <div className="stat-item">
                <p className="stat-label">Total Reviews</p>
                <h3>{formatNum(totalReviews)}</h3>
                <p className="stat-sub">46% More Than Last Month</p>
              </div>
              <div className="stat-item">
                <p className="stat-label">Active Apps</p>
                <h3>{appsData.length}+</h3>
                <p className="stat-sub">31 More Will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Apps ── */}
      <section className="top-apps-section">
        <div className="container">
          <div className="top-apps-box">

            <div className="top-apps-header">
              <span className="line-blue"></span>
              <h2>Trending Apps</h2>
              <p>Explore All Trending Apps on the Market developed by us</p>
              <span className="line-pink"></span>
            </div>

            <div className="home-apps-grid">
              {topApps.map(app => (
                <div key={app.id} className="home-app-card" onClick={() => navigate(`/apps/${app.id}`)}>
                  <div className="home-card-img">
                    <img src={getAppImage(app.id)} alt={app.title} />
                  </div>
                  <div className="home-card-body">
                    <h3>{app.title}</h3>
                    <div className="home-card-meta">
                      <span className="meta-dl">
                        <img src={iconDownloads} alt="" />
                        {formatDownloads(app.downloads)}
                      </span>
                      <span className="meta-rt">
                        <img src={iconRatings} alt="" />
                        {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="show-all-wrap">
              <button className="show-all-btn" onClick={() => navigate('/apps')}>Show All</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
