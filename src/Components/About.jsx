import { Icon } from "@iconify/react/dist/iconify.js";
import Base from "../Base/Base";

function About() {
  return (
    <Base>
      <div className="container">
        <div className="about-container">
          <div className="row">
            <div className="col">
              <h2 className="about-head">KARTHIKEYAN</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4 className="about-position">
                {" "}
                | UI/UX DESIGNER | WEB DEVELOPER
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="about-description">
                I am a passionate web developer and UI/UX designer with a focus
                on creating user-friendly, responsive websites. I am dedicated
                to continuous learning and enhancing my skills to stay on top of
                industry trends. Currently, I am seeking new opportunities to
                design and develop impactful digital experiences.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Birthday :</h5>
                    <p className="bio-data-ans">25 Jan 2001</p>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">City :</h5>
                    <p className="bio-data-ans">Bengaluru</p>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Website :</h5>
                    <p className="bio-data-ans">
                      <a
                        href="https://kknportfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://kknportfolio.netlify.app/
                      </a>
                    </p>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Degree :</h5>
                    <p className="bio-data-ans">BE</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Phone :</h5>
                    <p className="bio-data-ans">+91-6379445834</p>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Age :</h5>
                    <p className="bio-data-ans">23</p>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Email :</h5>
                    <p className="bio-data-ans">mkarthikeyan179@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <h4 className="about-position">SKILLS</h4>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:html5" width="128" height="128" />
                  <h6 className="skill-name">HTML</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:css3" width="128" height="128" />
                  <h6 className="skill-name">CSS</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon
                    icon="vscode-icons:file-type-js-official"
                    width="128"
                    height="128"
                  />
                  <h6 className="skill-name">JAVASCRIPT</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:bootstrap" width="128" height="128" />
                  <h6 className="skill-name">BOOTSTRAP</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon
                    icon="logos:tailwindcss-icon"
                    width="128"
                    height="128"
                  />
                  <h6 className="skill-name">TAILWIND</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:react" width="128" height="128" />
                  <h6 className="skill-name">REACT</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:vitejs" width="128" height="128" />
                  <h6 className="skill-name">VITE REACT</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="devicon:mongodb" width="128" height="128" />
                  <h6 className="skill-name">MONGODB</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:nodejs-icon" width="128" height="128" />
                  <h6 className="skill-name">NODEJS</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="ri:github-line" width="128" height="128" />
                  <h6 className="skill-name">GITHUB</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon
                    icon="skill-icons:netlify-light"
                    width="128"
                    height="128"
                  />
                  <h6 className="skill-name">NETLIFY</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:aws" width="128" height="128" />
                  <h6 className="skill-name">AWS</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:redux" width="128" height="128" />
                  <h6 className="skill-name">REDUX</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:postman-icon" width="128" height="128" />
                  <h6 className="skill-name">POSTMAN</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:material-ui" width="128" height="128" />
                  <h6 className="skill-name">MATERIAL UI</h6>
                </div>
                <div
                  className="icon-set"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Icon icon="logos:figma" width="128" height="128" />
                  <h6 className="skill-name">FIGMA</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <h4>EDUCATION</h4>
              <div className="education-content">
                <div className="education-detail-1">
                  <div className="education-year">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2023</p>
                  </div>
                  <h6 className="education-head">GUVI</h6>
                  <p>
                    I have completed a certificate course in MERN stack
                    development at guvi which is a IIT madras incubated company
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2018-2022</p>
                  </div>
                  <h6 className="education-head">BE(ECE)</h6>
                  <p>
                    Completed a Bachelor of Engineering (B.E.) in Electronics
                    and Communication Engineering from Loyola Institute of
                    Technology, with a strong foundation in problem-solving and
                    system integration, now focused on MERN Stack Development
                    for web application projects.
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2017-2018</p>
                  </div>
                  <h6 className="education-head">HSC</h6>
                  <p>
                    Completed Higher Secondary Certificate (HSC) with 80% at
                    Cheran Higher Secondary School, excelling in core subjects
                    and building a strong academic foundation for further
                    studies.
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2015-2016</p>
                  </div>
                  <h6 className="education-head">SSLC</h6>
                  <p>
                    I successfully completed my SSLC with 90% at Cheran Higher
                    Secondary School.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <h4 className="about-position">EXPERIENCE</h4>
              <div className="experience-content">
                <div className="experience-detail-1">
                  <div className="experience-year">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2024</p>
                  </div>
                  <h6 className="education-head">NITI Internship - One-Month Online Internship</h6>
                  <p>
                  During my one-month online internship with NITI (Nationa
                    l Institution for Transforming India), I had the opportunity to 
                    gain hands-on experience in policy analysis, research, and
                     project management. The internship provided an in-depth 
                    understanding of the organization’s efforts in promoting sustainable growth and development across India. I was
                    involved in supporting various research projects, assisting
                    in data collection and analysis, and contributing to reports 
                   and presentations that were aimed at addressing key policy 
                   challenges. Additionally, I had the chance to collaborate with 
                   a diverse team of professionals and learn about government
                    initiatives, socioeconomic issues, and the policy-making 
                   process.
                  </p>
                </div>
                               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default About;
