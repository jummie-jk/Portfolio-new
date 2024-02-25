import { NavBar } from "../../Components/NavBar/navbar"
import image from "../../assets/my-image.jpg"
import dot from '../../assets/dot.png'
import linkedln from "../../assets/linkedIn.png"
import github from "../../assets/github.png"
import { Link } from "react-router-dom"
import './homepage.css'
import { ProjectCard } from "../../Components/ProjectsCard/projectsCard"
import cryptous from '../../assets/cryptous-new.png'
import dashboard from '../../assets/dashboard.png'
import tasktracker from '../../assets/task-tracker.png'

export const HomePage = () => {
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
                        <div> <img src={linkedln} alt="Icon" /></div>
                        <div><img src={github} alt="Icon" /></div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="my-image"/>
                </div>
             </div>
           </section>
           <hr className="rule"/>
           <section className="section">
            <div>
                <p className="header-text">featured projects</p>
                <p className="intro-mini ">Here are some of the selected projects that showcase my passion for <br/> front-end development.</p>
            </div>
            <div>
                <ProjectCard
                    imageurl ={cryptous}
                    projectTitle = 'Cryptous'
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = 'React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://crypto-website-six.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Crypto-website'
                />
                 <ProjectCard
                    imageurl = {tasktracker}
                    projectTitle = "Task Tracker"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = 'React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://taskss-tracker.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Task-tracker'
                />
                 <ProjectCard
                    imageurl = {dashboard}
                    projectTitle = "Dashboard"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2024"
                    stacks = 'React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://dashboardd-kit.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Dashboard'
                />
            </div>
           </section>
           <hr className="rule"/>
           <section className="section">
                <div>
                    <p className="header-text">About me</p>
                </div>
                <div>
                    <p></p>
                </div>
           </section>
        </div>
    )
}