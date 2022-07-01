import React from "react";
import { Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, name, img, price, description } = service;

  const navigate = useNavigate();

  const serviseDetailsHandler = (id)=>{
      navigate(`/home/${id}`);
  }
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
          <Button variant="primary" onClick={()=>serviseDetailsHandler(_id)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
