import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <section>
      {/* ... other code remains unchanged ... */}
      <div className="parallax"></div>
      <div className="centered">
        Hello! I'm <span className="dark-pink">Mohmed Vaid</span>. I'm
        full-stackweb developer.
      </div>

      <div className="vid-img-container">
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="myImg-container"
        >
          <p className="hover-text-lg"> Hover over the image for more info!</p>
          <p className="hover-text-s"> Tap on the image for more info!</p>
          <img
            className="about-img"
            src="/assets/my-img-code-bg-final.png"
            alt="Mohmed vaid profile"
          />
          <div className="overlay">
            <div className="text">
              <div className="text-code">
                &lt;mohmed&gt;
                <br />
              </div>
              <blockquote>
                <div className="text-code">&lt;head&gt;</div>
                <blockquote>
                  getBrain = () =&gt; &#123;
                  <br />
                  <blockquote>
                    return &#123;
                    <br />
                    software engineer: 50%,
                    <br />
                    entrepreneur: 50%
                    <br />
                    &#125;
                  </blockquote>
                  &#125;;
                </blockquote>
                <div className="text-code">&lt;/head&gt;</div>

                <div className="code-body">
                  <div className="text-code">
                    &lt;body&gt;
                    <br />
                  </div>
                  <blockquote>
                    &lt;baseball&gt;75%&lt;/baseball&gt;
                    <br />
                    &lt;gym&gt;25%&lt;/gym&gt;
                  </blockquote>
                  <div className="text-code"> &lt;/body&gt;</div>
                </div>
              </blockquote>
              <div className="text-code">
                &lt;/mohmed&gt;
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="video"
        >
          <img
            className="tech-img Es6-nodeJS"
            src="/assets/tech-images/es6-nodeJS.jpg"
            alt="Es6-nodeJS"
          ></img>
          <img
            className="tech-img html-css"
            src="/assets/tech-images/html-css.jpg"
            alt="html-css"
          ></img>
          <img
            className="tech-img Es6-nodeJS"
            src="/assets/tech-images/MERN.jpg"
            alt="MERN"
          ></img>
        </div>
      </div>
      <div className="parallax aboutme-parallex">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="aboutme aboutme-main"
        >
          <p className="heading">About Me</p>
          <p className="aboutpara">
            I am a Full Stack Web Developer based in Chicago IL, leveraging my
            background in computer science to build efficient and powerful web
            applications. I recently earned a certificate in Full Stack Web
            Development from Northwestern University, where I developed skills
            in JavaScript, React.js, Node.js, Axios, Express, MongoDB, SQL, CSS,
            HTML, and Python to develop a powerful full stack and server-side
            applications.
            <br />
            <br /> Known as an innovative problem-solver passionate about
            developing meaningful apps,with a focus on time and space complexity
            algorithms and mobile-first design development. Willingness to learn
            about entrepreneurship and business challenges from a diverse
            perspective and collaborating with others to create meaningful
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
