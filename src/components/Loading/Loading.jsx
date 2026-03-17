import './Loading.css'

function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading-spinner">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  )
}

export default Loading
