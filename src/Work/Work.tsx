import React, { useEffect, useState } from 'react'
import styles from './Work.module.scss'
import pizzaSite2 from '../assets/pizzaSite2.png'
import pizzaSite1 from '../assets/pizzaSite1.png'
import donateTask from '../assets/donateTask.jpg'
import trvl2 from '../assets/TRVL2.png'
import trvl from '../assets/TRVL.png'

const Work:React.FC= () => {
  const [index,setIndex] = useState<number>(0)
  const arrImg =[pizzaSite1,pizzaSite2]
  const arrImg2 = [trvl,trvl2]
  const intervalTime = 3000

  useEffect(()=>{
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arrImg.length)
  }, intervalTime);
      return () => clearInterval(interval);
  },[])
 

  return (
    <div className={styles.work_container}>
      <h2>My Projects</h2>
      <h3 style={{textDecoration:'underLine',display:'flex',justifyContent:'center'}}>from GitHub</h3>
      <div className={styles.work_projects}>
            <div  className={styles.work_project}>
                <span>PizzaShop</span>
                <a href="https://github.com/TvoyAfon/PizzaProjectSite"><img src={arrImg[index]} alt="demoShop"/></a>
                <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
                      <span>Fake pizza store with a simple interface and beautiful layout.</span>
                      <span>React+TS+ReduxToolkit+SCSS</span>
                </div>
            </div>
            <div className={styles.work_project}>
                <span>Donate Task</span>
                <a href="https://github.com/TvoyAfon/donateTask"><img style={{width:'400px',height:'auto'}} src={donateTask} alt="donateTask" /></a>
                <div>Fake dialogue with an interactive interface for sending donation to the user.</div>
            </div>
            <div className={styles.work_project}>
                <span>Travel Site</span>
                <a href="https://github.com/TvoyAfon/myFirstDemoShop"><img  src={arrImg2[index]} alt="Shop" /></a>
                <div>Beautiful interface. Animations.Added item logic to cart and more...</div>
            </div>
      </div>
    </div>
  )
}

export default Work
