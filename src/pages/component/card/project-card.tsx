import { Card } from "react-bootstrap"
import { Projects } from "@/constants/Info"
import { Chip } from "@mui/material"
import Shadow from "../wrapper/Shadow"

const ProjectCard = (props?: any) => {
    return (
        <>
        <div className="bg-white project-wrapper">
            <h3 className="justify-content-center text-center label">Projects</h3>
            <div className="grid justify-content-center">
                {(Projects || []).map((item) => {
                    return(
                        <Card {...props} style={{ background: `url(${item.imgBackground}) no-repeat`, backgroundSize: 'cover'}}>
                            <Card.Body>
                                <div className="d-inline">
                                    <Card.Title>{item.name}</Card.Title>
                                    <div className="card-text">
                                        {(item.tag ?? []).map((tag) => {
                                            return(
                                                <Chip className="chip" label={`${tag}`} />
                                            )
                                        })}
                                        <hr />
                                        <p>
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                                <Shadow hide={!item.url}>
                                    <a className="visit-link" href={`${item.url}`}>Visit Project</a>
                                </Shadow>
                            </Card.Body>
                        </Card>
                    )
                })} 
            </div> 
            <div className="d-flex footer justify-content-center mb-3 more-added">
                <span>More will added soon, please tune in and visit frequent</span>
            </div>
        </div>          
        </>
    )
}

export default ProjectCard