import React from 'react'
import styles from './Footer.module.scss'
import Modal from '../Modal/Modal'
const Footer:React.FC = () => {
  return (
    <div className={styles.footer_container}>
    <Modal/>
    </div>
  )
}

export default Footer
