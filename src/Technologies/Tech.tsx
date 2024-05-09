import React from 'react'
import styles from './Tech.module.scss'
import icon1 from '../assets/JS.jpg'
import icon2 from '../assets/ts.png'
import icon3 from '../assets/VITE.png'
import icon4 from '../assets/CSS.png'
import icon5 from '../assets/FIREBASE.jpg'
import icon6 from '../assets/REACT.png'
import icon7 from '../assets/REDUX.jpeg'
import icon8 from '../assets/SCSS.webp'
import icon9 from '../assets/TAILWIND.png'
import icon10 from '../assets/QUERY.webp'
import icon11 from '../assets/GIT.webp'
import About from '../About/About'
const Tech:React.FC = () => {
  return (
      <div className={styles.tech}>
      <div className={styles.tech_container}>
        <h2>My current Stack Technology</h2>
         <div className={styles.icon_container}>
            <span><img src={icon1} alt="JS" /></span>
            <span><img src={icon2} alt="TS" /></span>
            <span><img src={icon4} alt="CSS" /></span>
            <span><img src={icon6} alt="REACT" /></span>
            <span><img src={icon7} alt="redux" /></span>
            <span><img src={icon8} alt="scss" /></span>
            <span><img src={icon9} alt="tailwind" /></span>
            <span><img src={icon11} alt="git" /></span>
            <span><img src={icon10} alt="react-query" /></span>
            <span><img src={icon3} alt="vite" /></span>
            <span><img src={icon5} alt="FireBase" /></span>
         </div>
        </div>
        <About/>
       </div>
    
  )
}

export default Tech
