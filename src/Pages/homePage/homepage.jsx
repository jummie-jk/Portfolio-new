import { NavBar } from "../../Components/NavBar/navbar"
import image from "../../assets/my-image.jpg"
import dot from '../../assets/dot.png'
import linkedln from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "react-router-dom"
import linkedlnn from '../../assets/linkedinnNew.png'
import twitterr from '../../assets/twitter.png'
import githubb from '../../assets/githubb.png'
import instagramm from '../../assets/instagram.png'
import './homepage.css'
import { ProjectCard } from "../../Components/ProjectsCard/projectsCard"
import cryptous from '../../assets/cryptous-new.png'
import dashboard from '../../assets/dashboard.png'
import tasktracker from '../../assets/task-tracker.png'
import { ContactForm } from "../../Components/Contact/contactPage"
import arrow from "../../assets/arrow.png"
import resume from '../../assets/resume.pdf'

export const HomePage = () => {
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

           <section className="section">
             <div className="homepage-intro-div">
                <div>
                    <p  className="intro-text">hi, i am <br/> olajumoke ipoola.</p>
                    <p className="intro-mini mobile-hide">A creative front-end developer passionate about building <br/>accessible and user friendly websites</p>
                    <p className="intro-mini web-hide">A creative front-end front-end developer passionate about building accessible and user friendly websites.</p>
                    <div className="home-contact-div">
                        <div>
                            <Link to='/contact'>
                            <button class="contact-button">
                            
                            Contact Me
                            <img src={dot} alt="Contact Icon" class="contact-icon"/>
                        </button>
                            </Link>
                           
                        </div>
                        <div> <a href="https://www.linkedin.com/in/olajumokeipoola/" target="_blank"><img src={linkedln} alt="Icon" /></a></div>
                        <div> <a href="https://github.com/jummie-jk" target="_blank"><img src={github} alt="Icon" /></a></div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="my-image"/>
                </div>
             </div>
           </section>
           <hr className="rule"/>
           {/* Featured Projects */}
           <section className="section">
            <div>
                <p className="header-text">featured projects</p>
                <p className="intro-mini ">Here are some of the selected projects that showcase my passion for <br/> front-end development.</p>
            </div>
            <div>
                <ProjectCard
                    imageurl ={cryptous}
                    projectTitle = 'Cryptous'
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from coingecko API.'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://crypto-website-six.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Crypto-website'
                />
                 <ProjectCard
                    imageurl = {tasktracker}
                    projectTitle = "Task Tracker"
                    projectDescription = 'Task Tracker is a website that helps you get control of your day by taking a list of all your tasks for the day and adding priority level to each task.'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Git & Github'
                    projectlink = 'https://taskss-tracker.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Task-tracker'
                />
                 <ProjectCard
                    imageurl = {dashboard}
                    projectTitle = "Dashboard"
                    projectDescription = 'Dashboard makes data easy and help users gain real-time insights and customization options for better decision-making.'
                    year = "2024"
                    stacks = ' React, SASS/SCSS, Recharts, Material-UI, Vercel, Git & Github'
                    projectlink = 'https://dashboardd-kit.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Dashboard'
                />
                <div className="flex underline view-all">
                    <a href="/all-projects">View all projects</a>
                    <img src={arrow} alt="" />
                </div>
            </div>
           </section>
           {/* About Section */}
           <hr className="rule"/>
           <section className="section ">
             <div className="about-section">
             <div className="grid-item">
                    <p className="header-text">About me</p>
                </div>
                <div className="grid-item">
                    <p className="about-text">I'm a passionate and creative Frontend Developer with a strong desire to bring ideas to life through web development. </p>
                    <p className="intro-mini">
                    With a love for clean and elegant design, I thrive on turning complex problems into beautiful and user-friendly interfaces.

                    I believe that effective communication and collaboration are the keys to successful project development. I'm always excited to work alongside clients, designers, and other developers to transform ideas into reality.
                    </p>
                    <div className="flex underlinee more-text">
                    <p className=""><a href="/about" className="">More about me</a></p>
                    <img src={arrow} alt="" />
                    </div>
                </div>
             </div> 
           </section>
           <hr className="rule"/>
           {/* Contact Section */}
           <section className="section">
                <div className="contact-div">
                    <div>
                      <p className="header-text">Let's Connect</p>
                      <p className="intro-mini pb-1">Say hello at <a href="mailto:jumokeipoola2019@gmail.com"><span>jumokeipoola2019@gmail.com</span></a></p>
                      <p className="intro-mini">For more information, here is my <span onClick={onDownload}>resume</span></p>
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