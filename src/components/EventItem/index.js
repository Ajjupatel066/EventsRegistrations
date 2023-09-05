// Write your code here
import './index.css'

const EventItem = props => {
  const {eachItem, getRegistrationStatus} = props
  const {imageUrl, name, location, registrationStatus} = eachItem

  const onClickRegistration = () => {
    getRegistrationStatus(registrationStatus)
  }

  return (
    <li className="event-card">
      <button type="button" className="btn" onClick={onClickRegistration}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-card-name">{name}</p>
      <p className="event-card-location">{location}</p>
    </li>
  )
}

export default EventItem
