import dot from '../../assets/dot.png'
import linkedln from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "react-router-dom"
import './aboutpage.css'
import resume from '../../assets/resume.pdf'
import profileimage2 from '../../assets/my-image-2.jpg'
import { ContactPage } from '../contactPage/contactpage'

export const AboutPage = () => {

    const  onDownload = () => {
        const pdfUrl = resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                            
                            <button class="about-button" onClick={onDownload}>
                             Download Resume
                            <img src={dot} alt="Contact Icon" class="contact-icon"/>
                        </button>
                            
                           
                        </div>
                        <div> <a href="https://www.linkedin.com/in/olajumokeipoola/" target="_blank"><img src={linkedln} alt="Icon" /></a></div>
                        <div> <a href="https://github.com/jummie-jk" target="_blank"><img src={github} alt="Icon" /></a></div>
                    </div>
                    </div>
                    
                </div> 
                <div className='large-image-div'>
                    <img src={profileimage2} alt="" className='large-image' />
                </div>
               
               
           </section>
           <section className='section'>
                <div className='capabilities-section'>
                    <div className='grid-item'><p className='header-text'>My Capabilities</p></div>
                    <div className='grid-item'>
                        <div><p className='intro-mini'>I am always looking to add more skills. I spend a lot of time learning about JavaScript frameworks like React and Angular to improve my skills in front-end development. I believe mastering these tools will make me a better software developer and more valuable in the industry.</p></div>
                        <div className='experience-div pad-top'>
                            <button  className='experience'>HTML</button>
                            <button  className='experience'>CSS</button>
                            <button  className='experience'>Tailwind</button>
                            <button  className='experience'>SASS/SCSS</button>
                            
                            
                        </div>
                        <div className='experience-div'>
                           <button  className='experience'>JavaScript</button>
                            <button  className='experience'>TypeScript</button>
                            <button  className='experience'>React</button>
                            <button  className='experience'>Angular</button>
                           
                        </div>
                        <div className='experience-div'> <button  className='experience'>Git and Github</button>
                        <button  className='experience'>Figma</button>
                        <button  className='experience'>Vercel</button>
                        </div>
                    </div>
                </div>
                
           </section>
           <hr className='rule'/>
           <section className="section">
           <div className='capabilities-section'>
            
                <div className="grid-item">
                                <p className="header-text">My Experience</p>
                </div>
           
             <div  className="grid-item">
             <div>
                    <div className='flex-btw-about'>
                        <div className=''>
                         <p className='role'>Frontend Developer Intern - Angular</p>
                         <p id='company'>Nigeria Development Foundation- NDF</p>
                        </div>
                        <p className='time'>Sep 2023 - Present</p>
                    </div>
                    <p className='doings'>Actively contributed to the development of user interfaces using Angular, resulting in a
                    more intuitive and responsive design.
                    Worked collaboratively with cross-functional teams to integrate frontend components
                    into larger systems and projects.

                    </p>
                    
                </div>
               <div>
                    <div className='flex-btw-about'>
                        <div>
                         <p className='role'>Frontend Developer Intern - React</p>
                         <p id='company'>Herlign</p>
                        </div>
                        <p className='time'>Apr 2023 - Jun 2023</p>
                    </div>
                    <p className='doings'>Collaborated closely with the team lead to develop and implement a fully functional
                    landing page for the web application herlign.org.
                    </p>
                    
                </div>
                <div>
                    <div className='flex-btw-about'>
                        <div>
                         <p className='role'>Frontend Developer Freelancing</p>
                        </div>
                        
                        <p  className='time'>Nov 2022 - Jan 2023</p>
                    </div>
                    <p className='doings top-pad'>
                   
                    Ensured a blend of creativity and functionality, contributing to a 15% increase in user engagement and satisfaction.
                    Worked on the development of send.herrands.com, a project aimed at solving specific client needs.
                    </p>
                </div>
                
             </div>
           </div>
           </section>
           <hr className='rule'/>
           <ContactPage/>
        </div>
    )
}