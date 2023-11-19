import React from "react"
import SpainMapComponent from "../components/SpainMapComponent";
import ManiPlacesOnScreen from "../components/ManiPlacesOnScreen";




export default function Contact() {
  
    return (
       /*  <form  className='ContactForm'>
         <input type='text' name='name' placeholder='Name'></input>
         <input type='email' name='email' placeholder='Email address'></input>
         <input type='text' name='comments' placeholder='How can we help?'></input>
         <textarea  rows={5} name='message' placeholder='Message' ></textarea>
         <button className='submit-btn' type='submit'>
            Send 
         </button>
        </form>   */      
        
        <div class="container">
          <form>
            <label for="email" class="form-label"></label>
            <input type="email" id="email" class="form-control" placeholder='Email address'/>
            <label for="name" class="form-label"></label>
            <input type="name" id="name" class="form-control" placeholder='Name'/>
            <label for="text" class="form-label"></label>
            <input type="text" id="text" class="form-control" placeholder='How can we help?'/>
            <label for="message" class="form-label textured-label"></label>
            <input type="textarea" id="message" class="form-control form-control-xl" placeholder='Message'/>
            <br/>
              <button>Send</button>
          </form>
        {/* <SpainMapComponent/>   */}
        <ManiPlacesOnScreen/>
       
       
       
        </div>


 /* hsuusad                   
  <div class="mb-3">
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
</div>   
 idsjdsjsa */
             
    );
  };
  
