import React from "react";
import { Card } from "react-bootstrap";

const CompCard = (props) => {
    return (
        <Card id="Card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CompCard;