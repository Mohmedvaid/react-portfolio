import React from "react";
import { Card, Col, Row, Icon, CardTitle } from 'react-materialize'
import './styles.css'



const Home = (props) => (
  
  <>
    <section >
        <div className="parallax"></div>
        <div className="centered">Hello! I'm <span className="dark-pink">Mohmed Vaid</span>. I'm full-stackweb developer.</div>

        <div className="vid-img-container"> 
          <div data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" 
          className ="myImg-container">
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
        <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="video">
           <img className="tech-img Es6-nodeJS" src="/assets/tech-images/es6-nodeJS.jpg"></img>
            <img className="tech-img html-css" src="/assets/tech-images/html-css.jpg"></img>
            <img className="tech-img Es6-nodeJS" src="/assets/tech-images/MERN.jpg"></img>
        </div>

        </div>
        <div className="parallax aboutme-parallex">
        <div data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500" className="aboutme aboutme-main">
            <p className="heading">About Me</p>
            <p className ="aboutpara">
            I am a Full Stack Web Developer based in Chicago IL, leveraging my background in computer science to build efficient and powerful web applications. I recently earned a certificate in Full Stack Web Development from Northwestern University, where I developed skills in JavaScript, React.js, Node.js, Axios, Express, MongoDB, SQL, CSS, HTML, and Python to develop a powerful full stack and server-side applications.<br/><br/> Known as an innovative problem-solver passionate about developing meaningful apps,with a focus on time and space complexity algorithms and mobile-first design development. Willingness to learn about entrepreneurship and business challenges from a diverse perspective and collaborating with others to create meaningful solutions. 
            
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
                  data-aos="flip-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                    
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
                      <p className="project-links">
                        <a href="https://github.com/raise-da-woof/fetch" target="_blank">
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
                data-aos="flip-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                
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
                

            </div>
        </div>
      </section>
  </>
);

export default Home;
