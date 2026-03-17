import { useNavigate } from 'react-router-dom'
import { error404Img } from '../../assets/images'
import './ErrorPage.css'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="error-page-wrapper">
      <div className="container">
        <div className="error-page">
          <img src={error404Img} alt="404 Not Found" />
          <h2>Oops, page not found!</h2>
          <p>The page you are looking for is not available.</p>
          <button onClick={() => navigate('/')}>Go Back!</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
