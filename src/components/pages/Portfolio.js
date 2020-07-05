import React from "react";
import { Card, Button } from 'react-bootstrap';
import myImage from '../assets/My-Img.jpeg'

const Portfolio = () => (
  <div>
    <h1 className="heading">My Projects</h1>
    <div className="card-container">
    <Card className="card" style={{ width: '23rem', height:'30rem' }}>
      <Card.Img variant="top" src={myImage} />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">The Shaker<i
                class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="card-buttons">
                <Button className="card-btn" variant="primary">Live</Button>
                <Button className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 
    <Card className="card" style={{ width: '23rem', height:'30rem' }}>
      <Card.Img variant="top" src={myImage} />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">The Shaker<i
                class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="card-buttons">
                <Button className="card-btn" variant="primary">Live</Button>
                <Button className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 
    <Card className="card" style={{ width: '23rem', height:'30rem' }}>
      <Card.Img variant="top" src={myImage} />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">The Shaker<i
                class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="card-buttons">
                <Button className="card-btn" variant="primary">Live</Button>
                <Button className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 
    <Card className="card" style={{ width: '23rem', height:'30rem' }}>
      <Card.Img variant="top" src={myImage} />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">The Shaker<i
                class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="card-buttons">
                <Button className="card-btn" variant="primary">Live</Button>
                <Button className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 

    <Card className="card" style={{ width: '23rem', height:'30rem' }}>
      <Card.Img variant="top" src={myImage} />
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">The Shaker<i
                class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div className="card-buttons">
                <Button className="card-btn" variant="primary">Live</Button>
                <Button className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 
    </div>
  </div>
);

export default Portfolio;
