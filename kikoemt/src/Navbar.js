import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { GlobalContext } from './Context';
import './Navbar.css'; // We'll add some historic style in CSS

function Navbar() {
    const { user, setUser } = useContext(GlobalContext);
    const nav=useNavigate()
    const handleLogout = () => {
        setUser(null);
        nav('/')
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-brand">Historic Tours</Link>
            </div>
            <ul className="navbar-links">
                {user && user.role === 'NORMAL' && (
                    <>
                        <li><Link to="/favlocations">Favourite Locations</Link></li>
                        <li><Link to="/tours">All Tours</Link></li>
                        <li><Link to="/reservations">My Reservations</Link></li>
                    </>
                )}
                {user && user.role === 'HOST' && (
                    <>
                        <li><Link to="/locations">All Locations</Link></li>
                        <li><Link to="/tours">All Tours</Link></li>
                    </>
                )}
            </ul>
            <div className="navbar-user">
                {user  &&
                    <span className="navbar-username">Welcome {user.username}!</span>
                }
                {user && <button className="navbar-btn" onClick={user ? handleLogout : () => {
                }}>
                    Log out
                </button>}
                {!user && <button className="navbar-btn" onClick={()=>{nav('/login')}}>
                    Log in
                </button>}
            </div>
        </nav>
    );
}

export default Navbar;
