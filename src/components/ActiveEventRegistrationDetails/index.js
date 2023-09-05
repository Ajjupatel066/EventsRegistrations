// Write your code here
import './index.css'
import {Component} from 'react'

class ActiveEventRegistrationDetails extends Component {
  renderRegistered = () => (
    <div className="status-detials">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="registration-registered">
        You have already registered for the event
      </h1>
    </div>
  )

  renderYetToRegister = () => (
    <div className="status-detials">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-registered"
      />
      <p className="registration-registered">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="status-detials">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderInitialStatus = () => (
    <>
      <p className="registration-initial">
        Click on an event, to view its registration details{' '}
      </p>
    </>
  )

  render() {
    const {apiStatus} = this.props

    switch (apiStatus) {
      case 'INITIAL':
        return this.renderInitialStatus()
      case 'REGISTERED':
        return this.renderRegistered()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
