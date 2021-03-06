import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src:
      "/assets/images/carousel1.png",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
    "/assets/images/carousel2.png",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:
    "/assets/images/carousel3.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src:
    "/assets/images/carousel4.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src:
    "/assets/images/carousel5.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Home = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Home;
