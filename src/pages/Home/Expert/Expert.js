import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({experts}) => {
    const {name, img, Job_title} = experts;
    console.log(experts.img)
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{Job_title}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
