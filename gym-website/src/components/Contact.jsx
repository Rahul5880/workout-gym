import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder='Enter Your Name Here' required/>
        <input type="email" placeholder='Enter Your Email-Id Here' required/>
         <textarea name="message" placeholder='write Your Message Here.....'></textarea>
         <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact