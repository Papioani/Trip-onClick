import React from "react"


export default function Contact() {
  
    return (
        <form  className='ContactForm'>
         <input type='text' name='name' placeholder='Name'></input>
         <input type='email' name='email' placeholder='Email address'></input>
         <input type='text' name='comments' placeholder='How can we help?'></input>
         <textarea  rows={5} name='message' placeholder='Message' ></textarea>
         <button className='submit-btn' type='submit'>
            Send 
         </button>
        </form>             
                    
 /* <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email">
</div> 
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label"></label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="How can we help?">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label"></label>
  <input type="textarea" class="form-control" id="formGroupExampleInput2" placeholder="Message">
</div>  */

             
    );
  };
  
