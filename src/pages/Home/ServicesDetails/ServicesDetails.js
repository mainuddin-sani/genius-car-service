import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ServicesDetails = () => {
  const params = useParams();

  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <h1>Hello services Details : {params.id}</h1>

      <Card>
        <Card.Img variant="top" src={details.img} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <p>price: {details.price}</p>
          <Card.Text>{details.description}</Card.Text>
          <Button variant="primary" >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesDetails;
