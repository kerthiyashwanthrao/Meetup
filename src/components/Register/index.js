import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <div className="main-container">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <form className="form" onSubmit={submitRegistration}>
                <h1 className="h1">Let us join</h1>
                <div className="input-container">
                  <label className="label" htmlFor="name">
                    NAME
                  </label>
                  <input
                    className="input"
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="topic">
                    Topics
                  </label>
                  <select
                    className="select"
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="button" type="submit">
                  Register Now
                </button>
                {showError === true ? (
                  <p className="err-msg">Please enter your name</p>
                ) : (
                  ''
                )}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
