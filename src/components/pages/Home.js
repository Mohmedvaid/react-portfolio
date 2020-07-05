import React from "react";
import localVideo from '../assets/Portfolio-Video.mp4'
import myImage from '../assets/My-Img.jpeg'
import { Button } from 'react-bootstrap';


// function pauseVid(){
//     let video = document.querySelector(".video-main")
//     video.addEventListener("timeupdate", function(){
//       if(this.currentTime === 2) {
//           this.pause();
//       }
//   });

// }

const Home = (props) => (
  
  <>
    <section >
        <div className="parallax"></div>
        <div className="centered">Hello, my name is Mohmed Vaid.</div>

        <div  className="vid-img-container">
        <div   className="video">
            <video  autoPlay muted loop style={{width: "100%", height: "100%"}} className="video-main"> 
            <source src={localVideo} type="video/mp4"/>
            </video>
        </div>
        
        <div className ="myImg-container">
          <img className="about-img"src={myImage} alt="Mohmed vaid Profile " />
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
