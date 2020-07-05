import React from "react";
import { Card, Button } from 'react-bootstrap';
import passwordGenImg from '../assets/project-images/Password-Generator-Img.png'
import shakerImg from '../assets/project-images/The_Shaker_Hero.png'
import weartherImg from '../assets/project-images/Weather_Dashboard_Hero.png'

const cardSize = {
  width: '35rem', 
  height:'25rem' 
}

const Portfolio = () => (
  <div>
    <h1 className="heading">My Projects</h1>
    <div className="card-container">
    <Card className="card" style={cardSize}>
      <Card.Img variant="top" src={passwordGenImg} />
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">The Shaker<i
                className="material-icons right">more_vert</i></span>
          </div>
        <div className="card-reveal">
          <Card.Body>
              <Card.Title>Card Title <i className="material-icons right">close</i></Card.Title>
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

    <Card className="card" style={cardSize}>
      <Card.Img variant="top" src={weartherImg} />
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">The Shaker<i
                className="material-icons right">more_vert</i></span>
          </div>
        <div className="card-reveal">
          <Card.Body>
              <Card.Title>Card Title <i className="material-icons right">close</i></Card.Title>
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

    <Card className="card" style={cardSize}>
      <Card.Img variant="top" src={shakerImg} />
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">The Shaker<i
                className="material-icons right">more_vert</i></span>
          </div>
        <div className="card-reveal">
          <Card.Body>
              <Card.Title>Card Title <i className="material-icons right">close</i></Card.Title>
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
