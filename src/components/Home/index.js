import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <div className="home-container">
                <h1 className="heading">Hello {name}</h1>
                <p className="para">Welcome to {topic}</p>
                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            ) : (
              <div className="home-container">
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <Link to="/register">
                  <button className="button" type="button" onClick={onRegister}>
                    Register
                  </button>
                </Link>

                <img
                  className="img"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
