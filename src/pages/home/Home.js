import React from "react";
import { Card, Button } from 'react-bootstrap';
import './styles.css'

const cardSize = {
  width: '35rem', 
  height:'25rem' 
}

const Home = (props) => (
  
  <>
    <section >
        <div className="parallax"></div>
        <div className="centered">Hello, my name is Mohmed Vaid.</div>

        <div  className="vid-img-container">
        <div   className="video">
            <video  autoPlay muted loop style={{width: "100%", height: "100%"}} className="video-main"> 
            <source src="/assets/Portfolio-Video.mp4" type="video/mp4"/>
            </video>
        </div>
        
        <div className ="myImg-container">
          <img className="about-img"src="/assets/My-Img.jpeg" alt="Mohmed vaid Profile " />
          <div className="overlay">
            <div className="text">
           <p> <div className="text-code">&lt;head&gt;</div>coder: 50%;<br/> entrepreneur: 50%;<br/> <div className="text-code"> &lt;/head&gt;</div></p> 
           <p><div className="text-code">&lt;body&gt;<br/></div> baseball: 75%;<br/> gym: 25%;<br/> <div className="text-code"> &lt;/body&gt;</div></p>
            </div>
          </div>
        </div>

        </div>
        <div className="aboutme">
            <p className="heading">About Me</p>
            <p className ="aboutpara">I'm a web developer based in Chicago IL, USA. I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I'm not coding, you'll find me playing baseball, gardening or working out in the park.</p>
        </div>
        <div className="aboutme">
            <p className="heading">Recent Work</p>
            <div className="recentwork-container">
                <Card className="card" style={cardSize}>
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
                

            </div>
        </div>

        <div className="cta">
          <p>Checkout My Latest Projects</p>
          <Button className="projects-btn" onClick={()=> props.handleChange("Portfolio")} style={{fontSize:"30px", width: "100%", height: "100px"}} variant="secondary" size="lg">
              Click Here!
         </Button>
        </div>
      </section>
  </>
);

export default Home;
