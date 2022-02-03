import React from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

function RenderCard(props) {

    return (<>
        <div className="container-fluid" style={{ width: '18rem' }}>
        
          <Card.Title >{props.title}</Card.Title>
          <Card.Text>
          <Card.Img  variant="top" src={props.img} width={500} height={190}/>
            {props.text}
          </Card.Text>
        
          {/* <Card.Link href={props.link}>Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        
      </div>
      </>
    )
}

export default RenderCard;