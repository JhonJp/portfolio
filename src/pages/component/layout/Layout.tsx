import BriefInfo from "../card/info";
import InfoCard from "../card/info-card"
import ProjectCard from "../card/project-card";
import Contact from "../contact/Contact";
import { MailOutline, LinkedIn } from '@mui/icons-material';
import { ContactDetails } from "@/constants/Info";

const Layout = (props?: any) => {
    return(
        <>
        <div className="main-sub-class">
            <div {...props}>
                <div className="info-card">
                    <InfoCard 
                        title="John Paeldin" 
                        details={
                            <>
                                <span>
                                    <u>Full-stack</u> Web Engineer
                                </span>
                                <p className="tagline">Turning ideas into reality, one line of code at a time.</p>
                                <h6>Send me an email or contact me via LinkedIn</h6>
                                <ul>
                                    <li><MailOutline /> jhonpaeldin0020@gmail.com</li>
                                    <li><LinkedIn /> /in/john-paeldin-625a2b150</li>
                                    <li></li>
                                </ul>
                            </>
                        }
                        action={
                            <div className="avatar holder">
                                <img alt="Avatar" className="img-avatar" src="/img/me.jpg" />
                            </div>
                        }
                    />
                </div>
            </div>

            <hr />
            {/* <NavBar className="bg-none" /> */}
            <BriefInfo />
        </div>

        <ProjectCard className="projects" />

        <Contact className="contact-details" details={ContactDetails} />

        <div className="d-flex footer justify-content-center mb-3">
            <span className="text-white">&copy; John Paeldin 2024</span>
        </div>
        
        </>
    )
}

export default Layout