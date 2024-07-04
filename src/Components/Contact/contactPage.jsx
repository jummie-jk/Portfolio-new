import { useState } from 'react';
import './contactPage.css'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const publicKey = 'hx6bhhpjMaJ26LMzJ'
    const serviceId = 'service_v9wxci9'
    const templateId = 'template_flqxwfj'
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )
      .then(
        (result) => {
          setStateMessage('Your Message has been delivered!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); 
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); 
        }
      );
    
  
    e.target.reset();
  };
    return(
        <div>
            <form onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input required type="text" name="user_name"  placeholder="Name" className='input-field' />
                </div>
                <div>
                    <label>Email</label>
                    <input required type="email" name="user_email" placeholder="Email" className='input-field'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea required rows="6" cols="50" placeholder="Please enter your message" name="message" className='input-field'/>
                </div>
                <div>
                    <input className='contact-footer-button ' type="submit" value="Send" disabled={isSubmitting} />
                </div>
                <div className='success'>
                  {stateMessage && <p>{stateMessage}</p>}
                </div>
               
            </form>
        </div>
    )
}