import "./Navigator.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Navigator() {
  return (
    <nav className="main-menu">
      <h1>Fitness App</h1>
      <img className="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb" alt="" />
      <ul>
        <li className="nav-item active">
          <b></b>
          <b></b>
          <a href="#">
            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
            {/* <i className="fa fa-house nav-icon"></i> */}
            <span className="nav-text">Home</span>
          </a>
        </li>

        <li className="nav-item">
          <b></b>
          <b></b>
          <a href="#">
            <i className="fa fa-user nav-icon"></i>
            <span className="nav-text">Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <b></b>
          <b></b>
          <a href="#">
            <i className="fa fa-calendar-check nav-icon"></i>
            <span className="nav-text">Schedule</span>
          </a>
        </li>

        <li className="nav-item">
          <b></b>
          <b></b>
          <a href="#">
            <i className="fa fa-person-running nav-icon"></i>
            <span className="nav-text">Activities</span>
          </a>
        </li>

        <li className="nav-item">
          <b></b>
          <b></b>
          <a href="#">
            <i className="fa fa-sliders nav-icon"></i>
            <span className="nav-text">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator;

