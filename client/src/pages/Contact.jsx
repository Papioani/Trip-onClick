import React from "react"


export default function Contact() {
  
    return (
      <form  className='ContactForm'>
         <input type='text' name='name' placeholder='Name'></input>
         <input type='email' name='email' placeholder='Email address'></input>
         <input type='text' name='comments' placeholder='How can we help?'></input>
         <textarea  rows={5} name='message' placeholder='Message' ></textarea>
         <button className='submit-btn' type='submit'>
            Submit
         </button>
        </form>              
                               
             
    );
  };
  
