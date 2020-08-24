import React from "react";
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
            <p className="hover-text-lg"> Hover over the image for more info!</p>
            <p className="hover-text-s"> Tap on the image for more info!</p>
            <img className="about-img"src="/assets/my-img-code-bg-final.png" alt="Mohmed vaid profile" />
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
            <p className ="aboutpara">
            I am a Full Stack Web Developer based in Chicago IL, leveraging my background in computer science to build efficient and powerful web applications. I recently earned a certificate in Full Stack Web Development from Northwestern University, where I developed skills in JavaScript, React.js, Node.js, Axios, Express, MongoDB, SQL, JavaScript, CSS, HTML, and Python to develop a powerful full stack and server-side applications.<br/><br/> Known as an innovative problem-solver passionate about developing meaningful apps,with a focus on time and space complexity algorithms and mobile-first design development. Willingness to learn about entrepreneurship and business challenges from a diverse perspective and collaborating with others to create meaningful solutions. 
            
            {/* Willingness to learn about entrepreneurship and business challenges from a diverse perspective and collaborating with others to create meaningful solutions. With each project, I aim to best engage my audience for impactful user experience. I applied aspects of UX, computer science fundamentals, and agile development in a recent project where I worked in a team of four to develop a MERN app that helps dog owners to find a buddy for their pets.  Fascinated by computer science fundamentals and breaking down a problem piece-by-piece to find a solution. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. */}
              </p>
        </div>
        </div>
        <div className="recent-work">
            <p className="heading">Recent Work</p>
            <div className="recentwork-container">
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
                      <p className="project-links">
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
                

            </div>
        </div>
      </section>
  </>
);

export default Home;
