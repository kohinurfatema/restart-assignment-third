import { useNavigate } from 'react-router-dom'
import { getAppImage } from '../../assets/images'
import iconDownloads from '../../assets/icon-downloads.png'
import iconRatings from '../../assets/icon-ratings.png'
import './AppCard.css'

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
  return num
}

function AppCard({ app }) {
  const navigate = useNavigate()

  return (
    <div className="app-card" onClick={() => navigate(`/apps/${app.id}`)}>
      <div className="app-card-img">
        <img src={getAppImage(app.id)} alt={app.title} />
      </div>
      <div className="app-card-body">
        <h3 className="app-card-title">{app.title}</h3>
        <div className="app-card-meta">
          <span className="meta-dl">
            <img src={iconDownloads} alt="downloads" />
            {formatDownloads(app.downloads)}
          </span>
          <span className="meta-rt">
            <img src={iconRatings} alt="rating" />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AppCard
