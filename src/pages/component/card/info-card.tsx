import { Card } from "react-bootstrap"
import Shadow from "../wrapper/Shadow"

interface IInforCard {
  img?: any | string
  title: string
  details: string | any
  action?: any
  others?: any
}

const InfoCard = (props: IInforCard) => {
  const { img, title, details, action } = props

  return (
    <Card {...props.others} id="movableDiv">
      <Shadow hide={!img}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Shadow>
      <Card.Body>
        <div className="d-inline">
          <Card.Title>{title ?? 'John Paeldin'}</Card.Title>
          <Shadow hide={!details}>
            <div className="card-text">
              {details}
            </div>
          </Shadow>
        </div>
        <Shadow hide={!action}>
          {action}
        </Shadow>
      </Card.Body>
    </Card>
  )
}

export default InfoCard