import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <Link to="/" className="brand-logo left">Instagram</Link>
                    <ul id="nav-mobile" className="right ">
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/signup">Singup</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/upload">UploadPost</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
