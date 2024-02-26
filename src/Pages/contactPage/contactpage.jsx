import { NavBar } from "../../Components/NavBar/navbar"
import { ContactForm } from "../../Components/Contact/contactPage"
import twitterr from '../../assets/twitter.png'
import githubb from '../../assets/githubb.png'
import instagramm from '../../assets/instagram.png'
import linkedlnn from '../../assets/linkedinnNew.png'

export const ContactPage = () => {
    return(
        <div>
            <section className="section">
                <div className="contact-div">
                    <div>
                      <p className="header-text ">Let's Connect</p>
                      <p className="intro-mini pb-1">Say hello at <span>jumokeipoola2019@gmail.com</span></p>
                      <p className="intro-mini">For more information, here is my <span>resume</span></p>
                      <div className="socials">
                      <a href="https://www.linkedin.com/in/olajumokeipoola/" target="_blank">  <img src={linkedlnn} alt="icon" className="social-icon"/></a>
                      <a href="https://github.com/jummie-jk"><img src={githubb} alt="icon" className="social-icon"/></a>
                      <a href="https://twitter.com/Jummie_jk" target="_blank">
                      <img src={twitterr} alt="icon" className="social-icon"/>
                      </a>
                       <a href="https://www.instagram.com/jummie_jk?igsh=cjVkenVhenY0OWMy" target="_blank">
                       <img src={instagramm} alt="icon" className="social-icon"/>
                       </a>
                       
                      </div>
                    </div>
                    <div>
                            <ContactForm/>
                    </div>
                </div>
           </section>
        </div>
    )
}