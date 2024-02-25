import { ProjectCard } from "../../Components/ProjectsCard/projectsCard"
import cryptous from '../../assets/cryptous-new.png'
import dashboard from '../../assets/dashboard.png'
import tasktracker from '../../assets/task-tracker.png'


export const ProjectsPage = () => {
    return(
        <div>
           <section className="section">
            <div>
                <p className="header-text">All projects</p>
                {/* <p className="intro-mini ">Here are some of the selected projects that showcase my passion for <br/> front-end development.</p> */}
            </div>
            <div>
                <ProjectCard
                    imageurl ={cryptous}
                    projectTitle = 'Cryptous'
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://crypto-website-six.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Crypto-website'
                />
                 <ProjectCard
                    imageurl = {tasktracker}
                    projectTitle = "Task Tracker"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Git & Github'
                    projectlink = 'https://taskss-tracker.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Task-tracker'
                />
                 <ProjectCard
                    imageurl = {dashboard}
                    projectTitle = "Dashboard"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2024"
                    stacks = ' React, SASS/SCSS, Vercel, Git & Github'
                    projectlink = 'https://dashboardd-kit.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Dashboard'
                />
                 <ProjectCard
                    imageurl ={cryptous}
                    projectTitle = 'Cryptous'
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Coingecko API, Git & Github'
                    projectlink = 'https://crypto-website-six.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Crypto-website'
                />
                 <ProjectCard
                    imageurl = {tasktracker}
                    projectTitle = "Task Tracker"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2023"
                    stacks = ' React, CSS, Vercel, Git & Github'
                    projectlink = 'https://taskss-tracker.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Task-tracker'
                />
                 <ProjectCard
                    imageurl = {dashboard}
                    projectTitle = "Dashboard"
                    projectDescription = 'Cryptous is a website that provides an up-to-date daily coin information sourced from a reliable APIs also offering a glimpse into the latest trends, market data, and price 7 most search coins,'
                    year = "2024"
                    stacks = ' React, SASS/SCSS, Vercel, Git & Github'
                    projectlink = 'https://dashboardd-kit.vercel.app/'
                    githublink = 'https://github.com/jummie-jk/Dashboard'
                />
            </div>
           </section>
        </div>
    )
}