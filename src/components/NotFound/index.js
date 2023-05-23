import './index.css'

const NotFound = () => (
  <div className="container">
    <img
      className="not-found-img"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1 className="err">Page not Found</h1>
    <p className="err-msg">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
