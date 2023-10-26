import React,{useEffect} from 'react';
function Contact()
{
    useEffect(()=>{
        document.title = "Contact";
      });
    return(
        <div>
        <h1>Contact Us</h1>
        <p>Swing by for a cup of coffee, or leave us a message </p>
        <p>Email : Hr@dsolutions.com </p>
        <p>Contact No :182 233 533 </p>
        </div>
    )
}
export default Contact;