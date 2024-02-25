import dot from '../../assets/dot.png'
import linkedln from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "react-router-dom"
import './aboutpage.css'
export const AboutPage = () => {
    return(
        <div>
              <section className="section ">
                <div className="about-sectionn">
                <div className="grid-item">
                        <p className="header-text">About me</p>
                    </div>
                    <div className="grid-item">
                        <p className="about-text">I'm a passionate and creative Frontend Developer with a strong desire to bring ideas to life through web development. </p>
                        <p className="intro-mini">
                        With a love for clean and elegant design, I thrive on turning complex problems into beautiful and user-friendly interfaces.

                        I believe that effective communication and collaboration are the keys to successful project development. I'm always excited to work alongside clients, designers, and other developers to transform ideas into reality.
                        </p>
                        <div className="home-contact-div">
                        <div>
                            <Link to='/contact'>
                            <button class="contact-button">
                            
                             Download Resume
                            <img src={dot} alt="Contact Icon" class="contact-icon"/>
                        </button>
                            </Link>
                           
                        </div>
                        <div> <a href="https://www.linkedin.com/in/olajumokeipoola/" target="_blank"><img src={linkedln} alt="Icon" /></a></div>
                        <div> <a href="https://github.com/jummie-jk" target="_blank"><img src={github} alt="Icon" /></a></div>
                    </div>
                    </div>
                </div> 
                <div>
                    
                </div>
               
           </section>
        </div>
    )
}