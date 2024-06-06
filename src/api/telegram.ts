
const baseUrl = `https://api.telegram.org/bot7370837891:AAHTMbwPOwxuPStRV5X2LazcVaRnCxtsw-M/`

 const sendMessage  = async (message:string) =>{
  const url = `${baseUrl}sendMessage?chat_id=-4223490048&text=${message}`
  const response = await fetch(url)
  console.log(response)
}
export default sendMessage