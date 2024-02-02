import { Info } from "@/constants/Info"
import { Card } from "react-bootstrap"

const BriefInfo = (props: any) => {
    return(
        <>
            <div className="info-wrapper justify-content-between">
            {(Info || []).map((item) => {
                return(
                    <Card {...props} key={Math.floor(Math.random() * 9999999)}>
                        <Card.Img variant="top" src={`/img/${item.icon ?? 'fe.png'}`} />
                        <Card.Body>
                            <div className="d-inline">
                                <Card.Title>{item.title}</Card.Title>
                                <div className="card-text">
                                    {item.description}
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

export default BriefInfo