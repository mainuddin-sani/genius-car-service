import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  // dataload form json file
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="pt-5 pb-5">
      <Container>
        <h3 className="pb-4 text-center">Our Service</h3>
        <Row className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
