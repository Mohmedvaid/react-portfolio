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
        <div className="centered">Hello! I'm <span className="dark-pink">Mohmed Vaid</span>. I'm full-stackweb developer.</div>

        <div  className="vid-img-container">        
        <div className ="myImg-container">
          <img className="about-img"src="/assets/my-img-code-bg-final.png" alt="Mohmed vaid Profile " />
          <div className="overlay">
            <div className="text">
            <div className="text-code">&lt;mohmed&gt;<br/></div>
            <blockquote>
            <p><div className="text-code">&lt;head&gt;</div><blockquote>getBrain = () => &#123;<br/> <blockquote>return &#123;<br/>software engineer: 50%;<br/>entrepreneur: 50%;<br/>&#125;</blockquote>&#125;;</blockquote> <div className="text-code"> &lt;/head&gt;</div></p> 
            <p className="code-body"><div className="text-code">&lt;body&gt;<br/></div><blockquote>&lt;baseball&gt;75%&lt;/baseball&gt;<br/>&lt;gym&gt;25%&lt;/gym&gt;</blockquote><div className="text-code"> &lt;/body&gt;</div></p>
            </blockquote>
            <div className="text-code">&lt;/mohmed&gt;<br/></div>
            </div>
          </div>
        </div>
        <div className="video">
           <img className="tech-img Es6-nodeJS" src="/assets/tech-images/es6-nodeJS.jpg"></img>
            <img className="tech-img html-css" src="/assets/tech-images/html-css.jpg"></img>
            <img className="tech-img Es6-nodeJS" src="/assets/tech-images/MERN.jpg"></img>

        </div>

        </div>
        <div className="parallax aboutme-parallex">
        <div className="aboutme aboutme-main">
            <p className="heading">About Me</p>
            <p className ="aboutpara">I'm a web developer based in Chicago IL, USA. I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I'm not coding, you'll find me playing baseball, gardening or working out in the park.</p>
        </div>
        </div>
        <div className="aboutme recent-work">
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
