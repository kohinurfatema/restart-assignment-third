import { useState, useEffect } from 'react'
import AppCard from '../../components/AppCard/AppCard'
import Loading from '../../components/Loading/Loading'
import appsData from '../../data/apps.json'
import './AllApps.css'

function AllApps() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')
  const [searchLoading, setSearchLoading] = useState(false)
  const [displayedApps, setDisplayedApps] = useState(appsData)

  useEffect(() => {
    setSearchLoading(true)
    const timer = setTimeout(() => {
      let filtered = appsData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
      )
      if (sort === 'high-low') filtered = [...filtered].sort((a, b) => b.downloads - a.downloads)
      if (sort === 'low-high') filtered = [...filtered].sort((a, b) => a.downloads - b.downloads)
      setDisplayedApps(filtered)
      setSearchLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [search, sort])

  return (
    <div className="all-apps">
      <div className="container">

        {/* Title Section */}
        <div className="all-apps-title">
          <h1>Our All Applications</h1>
          <p>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        {/* Search & Count Bar */}
        <div className="all-apps-bar">
          <span className="apps-count">({displayedApps.length}) Apps Found</span>
          <div className="bar-right">
            <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Sort By Downloads</option>
              <option value="high-low">High - Low</option>
              <option value="low-high">Low - High</option>
            </select>
            <div className="search-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="search Apps"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        {searchLoading ? (
          <Loading />
        ) : displayedApps.length === 0 ? (
          <div className="no-apps">
            <p>No App Found</p>
            <span>Try a different search term</span>
          </div>
        ) : (
          <div className="apps-grid">
            {displayedApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default AllApps
