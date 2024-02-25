import { useState } from 'react';
import './contactPage.css'
// import emailjs from '@emailjs/browser';

export const ContactForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [stateMessage, setStateMessage] = useState(null);
//   const sendEmail = (e) => {
//     e.persist();
//     e.preventDefault();
//     setIsSubmitting(true);
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           setStateMessage('Message sent!');
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); 
//         },
//         (error) => {
//           setStateMessage('Something went wrong, please try again later');
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); 
//         }
//       );
    
  
//     e.target.reset();
//   };
    return(
        <div>
            <form onSubmit="">
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name"  placeholder="Name" className='input-field' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Email" className='input-field'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows="6" cols="50" placeholder="Please enter your message" name="message" className='input-field'/>
                </div>
                <div>
                    <input className='contact-footer-button ' type="submit" value="Send"  />
                </div>
              
            </form>
            {/* <form onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
            </form> */}
        </div>
    )
}