import { useNavigate } from "react-router-dom";
import videoSource from '../assets/videos/background-video.mp4';
import { ReactTyped } from "react-typed";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted preload="auto">
        <source src={videoSource} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="home-content">
        <div className="home-head">
          <h2>Hii, I am</h2>
          <ReactTyped className="name" strings={["KARTHIKEYAN M"]} typeSpeed={90} backSpeed={50}  
          backDelay={1000} 
          startDelay={500} 
          loop={true}    />
        </div>
        <div className="home-position">
          <h5>| ENGINEER | UI/UX DEVELOPER | MERN STACK DEVELOPER</h5>
        </div>
        <div className="home-para">
          <p>
            with knowledge in web development and design, I offer the best
            projects resulting in quality work.
          </p>
        </div>
        <div className="home-logo">
          <div className="logo">
          <a href="https://github.com/karthikn25" target="_blank"> <i className="bx bxl-github" ></i></a>
           
          </div>
          <div className="logo">
            <a href="https://www.linkedin.com/in/karthikeyan-m-48310a279/" target="_blank"><i className="bx bxl-linkedin"></i></a>
          </div>
          <div className="logo">
          <a href="https://www.figma.com/files/team/1289837835149916615/recents-and-sharing?fuid=1289837833600236842" target="_blank"><i className="bx bxl-figma"></i></a>
            
          </div>
        </div>
        <div className="home-btn">
          <button onClick={() => navigate("/about")}>More About Me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
