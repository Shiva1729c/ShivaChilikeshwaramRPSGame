import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {RiCloseLine} from 'react-icons/ri'

const Rules = () => (
  <Popup
    modal
    trigger={
      <button type="button" className="rules-button">
        RULES
      </button>
    }
    position="right center"
    className="popup-content"
  >
    {close => (
      <>
        <button type="button" onClick={close} className="close-button">
          <RiCloseLine />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="rules-image"
        />
      </>
    )}
  </Popup>
)

export default Rules
