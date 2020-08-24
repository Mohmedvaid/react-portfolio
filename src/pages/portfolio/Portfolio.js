import React from "react";
import { Card, Col, Row, Icon, CardTitle } from 'react-materialize'
import './styles.css'

const cardSize = {
  width: '35rem', 
  height:'25rem' 
}

const Portfolio = () => (
  <div>
    <h1 className="heading">My Projects</h1>
    <div className="card-container">
      {/* card 1 */}
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/fetch.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="Fetch"
        >
          <p >
            <a href="https://github.com/raise-da-woof/fetch">
              Github
            </a>
          </p>
        </Card>
      </Col>
    </Row> 
    {/* card 2 */}
    <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="/assets/project-images/mypantry.png" reveal waves="light"/>}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title="My Pantry"
          >
            <p className="project-links">
              <a href="https://github.com/Hot-Fixers/mypantry">
                Github
              </a>
              {/* <a href="https://shielded-harbor-38774.herokuapp.com/">
                Live Site
              </a> */}
            </p>
          </Card>
        </Col>
      </Row> 
      {/* card 3 */}
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/shaker.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="Shaker"
        >
          <p >
            <a href="https://github.com/JSON-D3RULO/shaker">
              Github
            </a>
          </p>
        </Card>
      </Col>
    </Row> 
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/fetch.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="Fetch"
        >
          <p >
            <a href="https://github.com/raise-da-woof/fetch">
              Github
            </a>
            {/* <a className="project-links" href="https://fetch-woof-312.herokuapp.com/">
              Live Site
            </a> */}
          </p>
        </Card>
      </Col>
    </Row> 
    {/* <Card className="card" style={cardSize}>
      <Card.Img variant="top" src="/assets/project-images/Password-Generator-Img.png" />
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
      <Card.Img variant="top" src="/assets/project-images/Weather_Dashboard_Hero.png" />
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
      <Card.Img variant="top" src="/assets/project-images/The_Shaker_Hero.png" />
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
    </Card>  */}
    </div>
  </div>
);

export default Portfolio;
