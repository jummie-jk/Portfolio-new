import { ProjectCard } from "../../Components/ProjectsCard/projectsCard"
import cryptous from '../../assets/cryptous-new.png'
import dashboard from '../../assets/dashboard.png'
import tasktracker from '../../assets/task-tracker.png'
import portfolio from '../../assets/portfolio.png'
import herlign from '../../assets/herlign.png'
import sandg from '../../assets/samson-and-gretel.png'

export const ProjectsPage = () => {
    return(
        <div>
           <section className="section">
            <div>
                <p className="header-text">All projects</p>
                <p className="intro-mini">The outcome of dedication, hard work, and consistency, with a sprinkle of prayers to the tech lords!

</p>
            </div>
            <div>
            <ProjectCard
                    imageurl ={sandg}
                    projectTitle = 'Samson and Gretel'
                    projectDescription = 'Samson and Gretel is your trusted legal partner, providing top-tier legal services with a commitment to integrity and excellence.'
                    year = "2022"
                    stacks = 'HTML, CSS, JavaScript, Vercel, Git & Github'
                    projectlink = 'https://samson-gretel-law-firm.vercel.app/#'
                    githublink = 'https://github.com/jummie-jk/Samson-Gretel-Law-Firm-'
                />
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
                    year = "2023"
                    stacks = ' React, SASS/SCSS, Recharts, Material-UI, Vercel, Git & Github'
                    projectlink = 'https://dashboardd-kit.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Dashboard'
                />
                
                 <ProjectCard
                    imageurl = {portfolio}
                    projectTitle = "Porfolio"
                    projectDescription = 'This is my personal porfolio website'
                    year = "2024"
                    stacks = 'React, CSS, Vercel, Git & Github'
                    projectlink = 'https://portfolio--project.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Portfolio-new'
                />
                 <ProjectCard
                    imageurl = {herlign}
                    projectTitle = "Herlign"
                    projectDescription = 'Herlign is a venture studio and a wellness gathering. This is an official website showing all the details about the organisation.'
                    year = "2023"
                    stacks = ' React, Tailwincss, Gatsby, Vercel, Git & Github'
                    projectlink = 'https://herlign.org/'
                    githublink = 'https://github.com/jummie-jk'
                />
            </div>
           </section>
        </div>
    )
}