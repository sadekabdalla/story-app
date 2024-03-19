import logo from '../assets/logo.png'
import './Nav.css'
import { Link , NavLink } from 'react-router-dom'
export default function Navbar ()  {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container">
                    <Link to="/" className="navbar-brand text-danger fs-1" href="/#"><img className='img' src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link  fs-1 " aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/About" className="nav-link  fs-1" >About</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

