import React, { useEffect } from 'react'
import styles from './MainPage.module.scss'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Tech from '../Technologies/Tech';
import photo_label from '../assets/mainPage_photo.jpg'
import { useState } from 'react';
import main_jpg from '../assets/main_jpg.jpg'
import main_jpg2 from '../assets/main_jpg2.jpg'

const MainPage:React.FC = () => {
  const arr_jpg = [main_jpg,main_jpg2,photo_label]
  const [index,setIndex] = useState<number>(0)
  const interval_time = 4000

  useEffect(() =>{
    const interval = setInterval(() =>{
      setIndex(prev => (prev+1) % arr_jpg.length)
    },interval_time);
    return () => clearInterval(interval)
  },[arr_jpg.length])

  const [text,setText] = useState('Contact me')
  const handleEnter = () =>{
       setText('In Telegram')
  }
  const handleLeave = () =>{
      setText('Contact me')
  }
  
    const handleScroll = () =>{
      window.scrollBy({
        top:2200,
        behavior:"smooth"
      })

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
                  <img src={arr_jpg[index]} alt="Image"/>
                  <div className={styles.image_blur}></div>
              </div>
          </div>
          <div className={styles.mainPage_container_about}>
                <h1>About me</h1>
                <div className={styles.mainPage_container_about_text}>
                  <span>Hi.Welcome to my page.</span>
                  <span>My name is Kirill.I'm 24 y.o. Living in Russia. I work frontend web-developer for 1 years.</span>
                  <span>On this page you can familiarize yourself with my current development technologies.</span>
                  <h3>I create websites for any business at a <span style={{color:'green'}}>low price.  </span>I can implement any of your idea.</h3>
                </div>
                <div></div>
                <span style={{fontSize:'24px',paddingRight:'18px'}}>Text me to learn more</span>
                <a href='https://t.me/msyub2000'><button onMouseLeave={handleLeave} onMouseEnter={handleEnter} className={styles.mainPage_container_about_button}>{text}</button></a>
          </div>
          <span className={styles.formBelow} onClick={handleScroll} style={{display:'flex',justifyContent:'center',cursor:'pointer'}} >Or fill out the form below.</span>
        </div>
        <Tech/>
    </div>
  )
}

export default MainPage
