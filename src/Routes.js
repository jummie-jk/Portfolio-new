import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import { HomePage } from "./Pages/homePage/homepage"
import { ContactPage } from "./Pages/contactPage/contactpage"
import { ProjectsPage } from "./Pages/projectsPage/projectsPage"
import { AboutPage } from "./Pages/aboutPage/aboutpage"
export const RoutePage = () => {
    return(
        <Router>
            <Routes>
                <Route path="/"  element={<HomePage />}>
                </Route>
                <Route path="/contact" element={<ContactPage />}>
                </Route>
                <Route path="/all-projects" element={<ProjectsPage/>}>
                </Route>
                <Route path="/about" element={<AboutPage/>}>
                </Route>
            </Routes>
        </Router>
    )
}