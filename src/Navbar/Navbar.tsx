import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/routes'

const Navbar:React.FC = () => {

  const handleScroll = () =>{
    window.scrollBy({
      top:2200,
      behavior:'smooth'
    }
  )
  }
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <Link className={styles.navbar_link} to={ROUTES.mainPage}>Main</Link>
        <Link className={styles.navbar_link} to={ROUTES.projects}>Work</Link>
        <button onClick={handleScroll} className={styles.navbar_link}>Contacts</button>
      </div>
    </div>
  )
}

export default Navbar
