import React from "react";
import { Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>price: {price}</p>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
