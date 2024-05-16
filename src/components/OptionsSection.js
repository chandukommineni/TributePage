import { Link } from "react-router-dom"
const OptionsSection = () => {
  return (
    <div className="option-container container shadow-sm">
      <ul>
        <li><Link className="link"  to="/">home</Link></li>
        <li><Link className="link" to="/Tributes">Tributes</Link></li>
        <li><Link className="link" to="/Services">Services</Link></li>
        <li><Link className="link" to="/Life">Life</Link></li>
        <li><Link className="link"  to="/Awards">Awards</Link></li>

      </ul>
    </div>
  )
}

export default OptionsSection 
