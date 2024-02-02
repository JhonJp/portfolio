import { title } from "process"
import { Card } from "react-bootstrap"
import Shadow from "../wrapper/Shadow"

const ProjectCard = (props?: any) => {
    return (
        <>
        <div className="project-wrapper justify-content-center">
            {([1,2,3,4] || []).map((item) => {
                return(
                    <Card {...props}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <div className="d-inline">
                                <Card.Title>John Paeldin</Card.Title>
                                <div className="card-text">
                                    sample
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })} 
        </div>           
        </>
    )
}

export default ProjectCard