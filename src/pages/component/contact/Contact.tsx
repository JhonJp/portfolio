import { IDetails } from "@/model/Contact"
import { MailOutline, LinkedIn } from "@mui/icons-material"
import { Card } from "react-bootstrap"

interface IContact {
    details: IDetails
    className?: string
}

const Contact = (props: IContact) => {
    const { details } = props
    return (
        <>
            <div {...props}>
                <Card {...props}>
                    <Card.Body>
                        <div className="d-inline">
                            <Card.Title>{details.headline}</Card.Title>
                            <div className="card-text">
                                {details.contactTag}
                                <ul>
                                    <li><MailOutline /> <a href="mailto:jhonpaeldin0020@gmail.com" >jhonpaeldin0020@gmail.com</a></li>
                                    <li><LinkedIn /> <a target="_blank" href="https://www.linkedin.com/in/john-paeldin-625a2b150/" >/in/john-paeldin-625a2b150</a></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Contact