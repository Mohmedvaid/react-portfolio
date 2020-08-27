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
          reveal={<><p>An app that helps pet owner find new friends for their furry family members. Created using MERN stack, React-image-crop Mongoose, Axios, Materialize, Multer, Imgur, Animate.css, Passport
            Raise Da Woof!<br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://fetch-woof-312.herokuapp.com/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/raise-da-woof/fetch" target="_blank">
                Github
              </a>
            </div></>}
          revealIcon={<Icon>more_vert</Icon>}
          title="Fetch"
        >
          <p >
            <a href="https://github.com/raise-da-woof/fetch" target="_blank">
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
            reveal={<><p>App that provides recipes to users with ingredients the users have on hand. Built with Spoonacular API, MySQL, Passport, Bulma,Express, Express Handlebars, ESLint. Travis.<br/><br/>
              </p>
              <div className="cardLinks">
              <a href="https://shielded-harbor-38774.herokuapp.com/" target="_blank">
                  Deployed Site
                </a><br/>
                <a href="https://github.com/Hot-Fixers/mypantry" target="_blank">
                  Github
                </a>
              </div></>}            revealIcon={<Icon>more_vert</Icon>}
            title="My Pantry"
          >
            <p className="project-links">
              <a href="https://github.com/Hot-Fixers/mypantry" target="_blank">
                Github
              </a>
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
          reveal={<><p>Shaker is a web app for discovering new cocktails and drinks. Favorite drinks can be stored in localStorage, recalled for future use and deleted is necessary. Shaker also features the Google maps api, allow users to pull up a map of bars near them that may be serving the new and interesting cocktails they find!<br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://json-d3rulo.github.io/shaker/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/JSON-D3RULO/shaker" target="_blank">
                Github
              </a>
            </div></>} revealIcon={<Icon>more_vert</Icon>}
          title="Shaker"
        >
          <p >
            <a href="https://github.com/JSON-D3RULO/shaker" target="_blank">
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
          reveal={<><p>The fitness tracker allows users to create, track and manage workouts/exercises using Chart.js. Its built using Express, MongoDB, Mongoose, and Chart js.

            <br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://full-fitness.herokuapp.com/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/Mohmedvaid/fitness-tracker" target="_blank">
                Github
              </a>
            </div></>}          revealIcon={<Icon>more_vert</Icon>}
          title="Fitness Tracker"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/fitness-tracker" target="_blank">
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
          reveal={<><p>A simple app that allows the users to add names and schedules times for any activity. The app then automatically creates displays shift according to the availibility of the people. Its created with jQuery, MongoDB and Express<br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://cr-shift.herokuapp.com/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/Mohmedvaid/cr-shift" target="_blank">
                Github
              </a>
            </div></>}          revealIcon={<Icon>more_vert</Icon>}
          title="CR-Shift Scheduler"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/cr-shift" target="_blank">
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
          reveal={<><p>Note takers is simple app that allows the users to create and save notes for future. The notes are saved in the local storage of the browser<br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://whispering-sea-22703.herokuapp.com/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/Mohmedvaid/note-taker" target="_blank">
                Github
              </a>
            </div></>}          revealIcon={<Icon>more_vert</Icon>}
          title="Note Taker"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/note-taker" target="_blank">
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
          reveal={<><p>Employee-tracker is a CLI content management system that allows the user to manage employees. The app allows the user to add/remove employees, departments and roles. Roles, Managers and employees can be views edited accordingly.<br/><br/>
            </p>
            <div className="cardLinks">
            
              <a href="https://github.com/Mohmedvaid/employee-tracker" target="_blank">
                Github
              </a>
            </div></>}          revealIcon={<Icon>more_vert</Icon>}
          title="Employee Manager"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/employee-tracker" target="_blank">
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
          reveal={<><p>The Weather App shows basic weather data such as a 5-day forecast for a city based on user search! Boostrap and jQuery were used to build this app<br/><br/>
            </p>
            <div className="cardLinks">
            <a href="https://mohmedvaid.github.io/weather-app/" target="_blank">
                Deployed Site
              </a><br/>
              <a href="https://github.com/Mohmedvaid/weather-app" target="_blank">
                Github
              </a>
            </div></>}          revealIcon={<Icon>more_vert</Icon>}
          title="Weather App"
        >
          <p >
            <a href="https://github.com/Mohmedvaid/weather-app" target="_blank">
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
