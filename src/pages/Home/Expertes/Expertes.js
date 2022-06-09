import React from "react";
import { Container, Row } from "react-bootstrap";
import Expert from "../Expert/Expert";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";

const Expertes = () => {
  const experts = [
    { id: 1, name: "Mainuddin Sani", Job_title: "Front End Developer", img: expert1},
    { id: 1, name: "Alex Sani", Job_title: "Backend Developer", img: expert2 },
    { id: 1, name: "Alex", Job_title: "Software Developer", img: expert3 },
    { id: 1, name: "Jhon Doe", Job_title: "Software Engineer", img: expert4 },
    { id: 1, name: "Malex", Job_title: "Google Software Engineer", img: expert5 },
    { id: 1, name: "Salex", Job_title: "Microsoft Software Engineer", img: expert6 },
  ];
  return (
    <section className="pb-5">
      <Container>
        <h3 className="pb-4 text-center">Our expert Team</h3>
        <Row className="g-4">
          {experts.map((experts) => (
            <Expert key={experts.id} experts={experts}></Expert>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Expertes;
