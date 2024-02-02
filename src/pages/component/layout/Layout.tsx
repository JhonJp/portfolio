import BriefInfo from "../card/info";
import InfoCard from "../card/info-card"
import ProjectCard from "../card/project-card";
import NavBar from "../navbar/navbar"
import { MailOutline, LinkedIn } from '@mui/icons-material';

const Layout = (props?: any) => {
    return(
        <>
        <div {...props}>
            <div className="info-card">
                <InfoCard 
                    title="John Paeldin" 
                    details={
                        <>
                            <span>
                                <u>Full-stack</u> web Engineer
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
                            <img className="img-avatar" src="/img/me.jpg" />
                        </div>
                    }
                />
            </div>
        </div>

        <hr />
        {/* <NavBar className="bg-none" /> */}

        <BriefInfo />

        {/* <ProjectCard className="projects" /> */}
        
        </>
    )
}

export default Layout