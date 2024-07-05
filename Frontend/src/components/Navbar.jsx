import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

  return (
    <nav className={styles.navContainer}>
        <Link to='/'><h1 className={styles.logo}>BrainShare</h1></Link>
        <ul className={styles.navigationTabs}>
            {isUserSignedIn ? (
                <>
                <Link to='/profile'><li className={styles.tab}>Profile</li></Link>
                <Link to='/change-password'><li className={styles.tab}>ChangePassword</li></Link>
                <li className={styles.tab} onClick={handleSignOut}>Sign Out</li>
                </>
            ) : (
                <>
                <Link to='/login'><li className={styles.tab}>Login</li></Link>
                <Link to='/signup' className={styles.tab}><li>Signup</li></Link>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar