import React, { ChangeEvent } from 'react'
import styles from './Modal.module.scss'
import { useState } from 'react'
import sendMessage from '../api/telegram'

const Modal:React.FC = () => {
  const [fillForm,setFillForm] = useState({
    name:'',
    number:'',
    message:'',
  })
 const  onChange = (event:ChangeEvent<HTMLInputElement>) =>{
  const {name, value} = event.target;
   setFillForm(prev => ({
    ...prev,
   [name]:value
   }))
   console.log(name,value)
 }
 const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) =>{
   try {
    
      sendMessage(fillForm.name)
      sendMessage(fillForm.number)
      sendMessage(fillForm.message)
      e.preventDefault()
      sendMessage
      alert('Заявка успешно отправлена.Ожидайте обратной связи.')
      setFillForm(() =>({
      name:'',
      message:'',
      number:''
    }))
    
   } catch (error) {
     alert(`'Произошла ошибка :',${error}`)
   }
 }

  return (
    <div className={styles.modal_container}>
      <span style={{display:'flex',justifyContent:'center'}}>Have a question or want to work together?</span>
      <form onSubmit={handleSubmit}>
        <input type="text"  name='name' onChange={onChange} value={fillForm.name} required placeholder=' Your name' />
        <input type="number" name='number' onChange={onChange} value={fillForm.number} required placeholder='+7(9)' />
        <input type="text" name='message'  onChange={onChange} value={fillForm.message}  required className={styles.input_msg} placeholder='Your message' />
        <button  type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Modal
