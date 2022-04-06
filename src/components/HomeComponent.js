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
];

const Home = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Home;
/* import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <cardTitle>{item.name}</cardTitle>
                <cardText>{item.description}</cardText>
            </CardBody>
        </Card>
    )
}


function Home(props) {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md m-1'>
                    <RenderCard item={props.park}/>
                </div>
                <div className='col-md m-1'>
                    <RenderCard item={props.promotion}/>   
                </div>
                <div className='col-md m-1'>
                    <RenderCard item={props.partner}/>
                </div>
            </div>     
        </div>
    );
}
export default Home; */