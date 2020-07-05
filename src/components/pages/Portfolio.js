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
              <Card.Title>Password Generator <i className="material-icons right">close</i></Card.Title>
              <Card.Text>
                A simple app that generates passwords for user according to the specifications
              </Card.Text>
              <div className="card-buttons">
                <Button href="https://mohmedvaid.github.io/homework3/Develop/" className="card-btn" variant="primary">Live</Button>
                <Button href="https://github.com/Mohmedvaid/homework3/tree/master/Develop" className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 

    <Card className="card" style={cardSize}>
      <Card.Img variant="top" src={weartherImg} />
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Weather App<i
                className="material-icons right">more_vert</i></span>
          </div>
        <div className="card-reveal">
          <Card.Body>
              <Card.Title>Weather App <i className="material-icons right">close</i></Card.Title>
              <Card.Text>
                Before you step out make sure to checkout the weather app! You might need an umbrella:)
              </Card.Text>
              <div className="card-buttons">
                <Button href="https://mohmedvaid.github.io/weather-app/" className="card-btn" variant="primary">Live</Button>
                <Button href="https://github.com/Mohmedvaid/weather-app" className="card-btn" variant="primary">Github</Button>
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
              <Card.Title>The Shaker<i className="material-icons right">close</i></Card.Title>
              <Card.Text>
                An app to help you find the perfect drink.
              </Card.Text>
              <div className="card-buttons">
                <Button href="https://json-d3rulo.github.io/project-1/" className="card-btn" variant="primary">Live</Button>
                <Button href="https://github.com/JSON-D3RULO/project-1" className="card-btn" variant="primary">Github</Button>
              </div>
          </Card.Body>
        </div>
    </Card> 
    </div>
  </div>
);

export default Portfolio;
