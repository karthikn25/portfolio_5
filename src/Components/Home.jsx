import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="home-container">
            <div className="home-content">
              <div className="home-head">
                <h3>Hii, I am</h3>
                <h2>KARTHIKEYAN</h2>
              </div>
              <div className="home-position">
                <h5>| ENGINEER | UI/UX DEVELOPER | MERN STACK DEVELOPER</h5>
              </div>
              <div className="home-para">
                <p>
                  with knowledge in web development and design, i offer the best
                  projects resulting in quality work.
                </p>
              </div>
              <div className="home-logo">
                <div className="logo">
                  <i className="bx bxl-github"></i>
                </div>
                <div className="logo">
                  <i className="bx bxl-linkedin"></i>
                </div>
                <div className="logo">
                  <i className="bx bxl-figma"></i>
                </div>
              </div>
              <div className="home-btn">
                <button onClick={()=>navigate("/about")}>More About Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
