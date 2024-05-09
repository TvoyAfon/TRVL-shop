import React from 'react'
import styles from './MainPage.module.scss'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Tech from '../Technologies/Tech';
import photo_label from '../assets/mainPage_photo.jpg'
import { useState } from 'react';

const MainPage:React.FC = () => {
  const [text,setText] = useState('Contact me')
  const handleEnter = () =>{
       setText('In Telegram')
  }
  const handleLeave = () =>{
      setText('Contact me')
  }
 
  return (
    <div className={styles.mainPage}>
        <div className={styles.mainPage_container}>
          <div className={styles.mainPage_container_label}>
              <h1>KIRILL AFONIN</h1>
              <span>frontend web-developer</span>
              <div className={styles.mainPage_container_contacts}>
                <a href='https://github.com/TvoyAfon'><FaGithub/></a>
                <a href='https://t.me/msyub2000'><FaTelegram/></a>
                <a href='https://instagram.com/tvoy.afon'><FaInstagram/></a>
              </div>
              <div className={styles.image_container}> 
                  <img src={photo_label} alt="Image"/>
                  <div className={styles.image_blur}></div>
              </div>
          </div>
          <div className={styles.mainPage_container_about}>
                <h1>About me</h1>
                <div className={styles.mainPage_container_about_text}>
                  <span>Hi.Welcome to my page.</span>
                  <span>My name is Kirill.I'm 24 y.o. Living in Russia. I'm working frontend web-developer for 1 years.</span>
                  <span>On this page you can familiarize yourself with my current development technologies.</span>
                  <h3>I can implement any of your ideas.</h3>
                </div>
                <a href='https://t.me/msyub2000'><button onMouseLeave={handleLeave} onMouseEnter={handleEnter} className={styles.mainPage_container_about_button}>{text}</button></a>
          </div>
        </div>
        <Tech/>
    </div>
  )
}

export default MainPage
