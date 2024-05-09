import React, { useRef } from 'react'
import styles from './Modal.module.scss'

const Modal:React.FC = () => {

  return (
    <div className={styles.modal_container}>
      <span>Have a question or want to work together?</span>
      <input type="text" placeholder='Name' />
      <input type="email" placeholder='Email' />
      <input type="text"  className={styles.input_msg} placeholder='Your message' />
      <button>Send</button>
       
    </div>
  )
}

export default Modal
