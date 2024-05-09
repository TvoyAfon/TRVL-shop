import React from 'react'
import styles from './About.module.scss'
import { IoSpeedometer } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6"
import { SiOpensourcehardware } from "react-icons/si";


const About:React.FC = () => {
  return (
    <div className={styles.about_container}>
      <h1>WHY ME</h1>
      <div className={styles.about_container_list}>
        <span>Responsibility <SiOpensourcehardware/></span>
        <span>Professionalism <FaComputer/> </span>
        <span>Speed <IoSpeedometer/></span>
      </div>
    </div>
  )
}

export default About