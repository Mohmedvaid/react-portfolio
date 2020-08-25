import React from "react";
import { Card, Col, Row, Icon, CardTitle } from 'react-materialize'
import './styles.css'


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
        className="portfolio-cards"
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
          className="portfolio-cards"
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
        className="portfolio-cards"
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
        className="portfolio-cards"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/fitness-tracker.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="Fitness Tracker"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/fitness-tracker">
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
        className="portfolio-cards"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/cr-shift.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="CR-Shift Scheduler"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/cr-shift">
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
        className="portfolio-cards"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/note-taker.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="CR-Shift Scheduler"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/note-taker">
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
        className="portfolio-cards"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/employee-manager.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="CR-Shift Scheduler"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/note-taker">
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
         className="portfolio-cards"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="/assets/project-images/weather-app.png" reveal waves="light"/>}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          revealIcon={<Icon>more_vert</Icon>}
          title="CR-Shift Scheduler"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/weather-app">
              Github
            </a>
          </p>
        </Card>
      </Col>
    </Row> 
  
    </div>
  </div>
);

export default Portfolio;
