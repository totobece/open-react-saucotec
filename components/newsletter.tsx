'use client'
import { FormEvent, useState } from "react"

export const Newsletter = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const onSubmit = async (e: FormEvent) => {

      e.preventDefault()
      try{
          const rest = await fetch('api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({
                name, email, message

            }),
            headers:{
              'content-type': 'application/json',
            },
          })

       } catch (err: any){
        console.error(err);

       }


  }

return (

<form onSubmit={onSubmit}>  
  
  <input 
    value={name} 
    onChange={(e) => setName(e.target.value)}
    type="text" placeholder="Name"
  />
  
  <input 
    onChange={e => setEmail(e.target.value)}
    value={email} type="email" placeholder="Email" 
  />
  
  <textarea 
    onChange={e => setMessage(e.target.value)}
    value={message}
    placeholder="Message"
    >

  </textarea>

  <button type="submit">Submit</button>


</form>



)



}