import React from "react";
import { Card, Button } from 'react-bootstrap';
import myImage from '../assets/My-Img.jpeg'

const Portfolio = () => (
  <div>
    <h1>My Projects</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Live</Button>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card> 
  </div>
);

export default Portfolio;
