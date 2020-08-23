import React from "react";
// import { Card, Button } from 'react-bootstrap';
import { Card, Col, Row, Icon, CardTitle } from 'react-materialize'
import './styles.css'

const cardSize = {
  width: '35rem', 
  height:'25rem' 
}

const Home = (props) => (
  
  <>
    <section >
        <div className="parallax"></div>
        <div className="centered">Hello! My name is Mohmed Vaid.</div>

        <div  className="vid-img-container">        
        <div className ="myImg-container">
          <img className="about-img"src="/assets/my-img-code-bg-final.png" alt="Mohmed vaid Profile " />
          <div className="overlay">
            <div className="text">
           <p> <div className="text-code">&lt;head&gt;</div>coder: 50%;<br/> entrepreneur: 50%;<br/> <div className="text-code"> &lt;/head&gt;</div></p> 
           <p><div className="text-code">&lt;body&gt;<br/></div> baseball: 75%;<br/> gym: 25%;<br/> <div className="text-code"> &lt;/body&gt;</div></p>
            </div>
          </div>
        </div>
        <div   className="video">
           <img className="tech-img Es6-nodeJS" src="/assets/tech-images/Es6-nodeJS.jpg"></img>
            <img className="tech-img html-css" src="/assets/tech-images/html-css.jpg"></img>
            <img className="tech-img Es6-nodeJS" src="/assets/tech-images/MERN.jpg"></img>

        </div>

        </div>
        <div className="aboutme">
            <p className="heading">About Me</p>
            <p className ="aboutpara">I'm a web developer based in Chicago IL, USA. I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I'm not coding, you'll find me playing baseball, gardening or working out in the park.</p>
        </div>
        <div className="aboutme">
            <p className="heading">Recent Work</p>
            <div className="recentwork-container">
                <Row>
                  <Col
                    m={6}
                    s={12}
                  >
                    <Card
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle image="/assets/project-images/Password-Generator-Img.png" reveal waves="light"/>}
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                      revealIcon={<Icon>more_vert</Icon>}
                      title="Card Title"
                    >
                      <p>
                        <a href="#">
                          This is a link
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
                      header={<CardTitle image="/assets/project-images/Password-Generator-Img.png" reveal waves="light"/>}
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                      revealIcon={<Icon>more_vert</Icon>}
                      title="Card Title"
                    >
                      <p>
                        <a href="#">
                          This is a link
                        </a>
                      </p>
                    </Card>
                  </Col>
                </Row> 
                

            </div>
        </div>
      </section>
  </>
);

export default Home;
