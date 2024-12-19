import Base from "../Base/Base";
import work1 from "../images/Kings_cafe_dashboard.png";
import work2 from "../images/cafe_qr.png";
import work3 from "../images/E-shipin.png";
import work4 from "../images/JobPortal.png";
import work5 from "../images/Private_chat_app.png";
import work6 from "../images/instamart.png";
import work7 from "../images/crud.png";

export default function Project() {
  return (
    <Base>
      <div className="">
        <div className="row">
          <div className="col">
            <div className="project-box-container">
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work1} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/kings_cafe_frontend" target="_blank"><i className="bx bxl-github"></i></a>
                    
                    <a href="https://kingscaferestaurant.netlify.app/" target="_blank"><i className="bx bx-globe"></i></a> 
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work2} alt="projects" />
                  </div>
                  <div className="project-btn">
                    <a href="https://github.com/karthikn25/kings_cafe_client" target="_blank"><i className="bx bxl-github"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work3} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/e-shippin-frontend" target="_blank"><i className="bx bxl-github"></i></a>
                  <a href="https://e-shipin.netlify.app/" target="_blank"><i className="bx bx-globe"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work4} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/jobportal_frontend" target="_blank"><i className="bx bxl-github"></i></a>
                     <a href="https://jobwaveapp.netlify.app/" target="_blank"><i className="bx bx-globe"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work5} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/privateChat_frontend" target="_blank"><i className="bx bxl-github"></i></a>
                   <a href="https://chatplayplan.netlify.app" target="_blank"><i className="bx bx-globe"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work6} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/GoShop" target="_blank"><i className="bx bxl-github"></i></a>
                  <a href="https://goshopapp.netlify.app" target="_blank"><i className="bx bx-globe"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={work7} alt="projects" />
                  </div>
                  <div className="project-btn">
                  <a href="https://github.com/karthikn25/deploytask-frontend" target="_blank"><i className="bx bxl-github"></i></a>
                  <a href="https://crudappforworkers.netlify.app" target="_blank"><i className="bx bx-globe"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
