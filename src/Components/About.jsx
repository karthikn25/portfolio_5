import { Icon } from "@iconify/react/dist/iconify.js";
import Base from "../Base/Base";
import { ReactTyped } from "react-typed";

function About() {
  return (
    <Base>
      <div className="">
        <div className="about-container">
          <div className="row">
            <div className="col">
              <h2 className="about-head">
                <ReactTyped
                  className="color"
                  strings={["KARTHIKEYAN M"]}
                  typeSpeed={90}
                  backSpeed={50}
                  backDelay={1000}
                  startDelay={500}
                  loop={true}
                />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="about-position">
                {" "}
                | UI/UX DESIGNER | WEB DEVELOPER | MOBILE APP DEVELOPER 
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="about-description">
                I am a passionate web developer,mobile app developer and UI/UX designer with a focus
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
                    <h5 className="bio-data-ans">25 Jan 2001</h5>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">City :</h5>
                    <h5 className="bio-data-ans">Bengaluru</h5>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Website:</h5>
                    <h5 className="bio-data-ans">
                      
                      <a
                        href="https://kknportfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color:"#fff"}}
                        className="about-portfolio"
                        >
                        https://kknportfolio.netlify.app/
                      </a>
                    </h5>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Degree :</h5>
                    <h5 className="bio-data-ans">BE</h5>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Phone :</h5>
                    <h5 className="bio-data-ans">+91-6379445834</h5>
                  </div>
                  <div className="bio-data">
                    <h5 className="bio-dataa-title">Age :</h5>
                    <h5 className="bio-data-ans">24</h5>
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
              <div className="skill-set">
                <div className="icon-set">
                  <Icon icon="devicon:html5" className="style-border" />
                  <h6 className="skill-name">HTML</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="devicon:css3" className="style-border" />
                  <h6 className="skill-name">CSS</h6>
                </div>
                <div className="icon-set">
                  <Icon
                    icon="vscode-icons:file-type-js-official"
                    className="style-border"
                  />
                  <h6 className="skill-name">JAVASCRIPT</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="devicon:bootstrap" className="style-border" />
                  <h6 className="skill-name">BOOTSTRAP</h6>
                </div>
                <div className="icon-set">
                  <Icon
                    icon="logos:tailwindcss-icon"
                    className="style-border"
                  />
                  <h6 className="skill-name">TAILWIND</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="devicon:react" className="style-border" />
                  <h6 className="skill-name">REACT</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="devicon:vitejs" className="style-border" />
                  <h6 className="skill-name">VITE REACT</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="devicon:mongodb" className="style-border" />
                  <h6 className="skill-name">MONGODB</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:nodejs-icon" className="style-border" />
                  <h6 className="skill-name">NODEJS</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="ri:github-line" className="style-border" />
                  <h6 className="skill-name">GITHUB</h6>
                </div>
                <div className="icon-set">
                  <Icon
                    icon="skill-icons:netlify-light"
                    className="style-border"
                  />
                  <h6 className="skill-name">NETLIFY</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:aws" className="style-border" />
                  <h6 className="skill-name">AWS</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:redux" className="style-border" />
                  <h6 className="skill-name">REDUX</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:postman-icon" className="style-border" />
                  <h6 className="skill-name">POSTMAN</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:material-ui" className="style-border" />
                  <h6 className="skill-name">MATERIAL UI</h6>
                </div>
                <div className="icon-set">
                  <Icon icon="logos:figma" className="style-border" />
                  <h6 className="skill-name">FIGMA</h6>
                </div>
                 <div className="icon-set">
                  <Icon icon="logos:docker" className="style-border" />
                  <h6 className="skill-name">DOCKER</h6>
                </div>
                 <div className="icon-set">
                  <Icon icon="skill-icons:gcp-light" className="style-border" />
                  <h6 className="skill-name">GOOGLE CLOUD</h6>
                </div>
                 <div className="icon-set">
                  <Icon icon="devicon:reactnative-wordmark" className="style-border" />
                  <h6 className="skill-name">REACT NATIVE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <h4 className="color">EDUCATION</h4>
              <div className="education-content">
                <div className="education-detail-1">
                  <div className="education-year timeline">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2023</p>
                  </div>
                  <h6 className="education-head color">GUVI</h6>
                  <p>
                    I have completed a certificate course in MERN stack
                    development at guvi which is a IIT madras incubated company
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year timeline">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2018-2022</p>
                  </div>
                  <h6 className="education-head color">BE(ECE)</h6>
                  <p>
                    Completed a Bachelor of Engineering (B.E.) in Electronics
                    and Communication Engineering from Loyola Institute of
                    Technology, with a strong foundation in problem-solving and
                    system integration, now focused on MERN Stack Development
                    for web application projects.
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year timeline">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2017-2018</p>
                  </div>
                  <h6 className="education-head color">HSC</h6>
                  <p>
                    Completed Higher Secondary Certificate (HSC) with 80% at
                    Cheran Higher Secondary School, excelling in core subjects
                    and building a strong academic foundation for further
                    studies.
                  </p>
                </div>
                <div className="education-detail-1">
                  <div className="education-year timeline">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2015-2016</p>
                  </div>
                  <h6 className="education-head color">SSLC</h6>
                  <p>
                    I successfully completed my SSLC with 90% at Cheran Higher
                    Secondary School.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <h4 className="about-position color">EXPERIENCE</h4>
              <div className="experience-content">
                <div className="experience-detail-1">
                  <div className="experience-year timeline">
                    <i className="bx bxs-calendar-alt"></i>
                    <p>2024</p>
                  </div>
                  <h6 className="education-head color">
                    NITI Internship - One-Month Online Internship
                  </h6>
                  <p>
                    During my one-month online internship with NITI (Nationa l
                    Institution for Transforming India), I had the opportunity
                    to gain hands-on experience in policy analysis, research,
                    and project management. The internship provided an in-depth
                    understanding of the organization’s efforts in promoting
                    sustainable growth and development across India. I was
                    involved in supporting various research projects, assisting
                    in data collection and analysis, and contributing to reports
                    and presentations that were aimed at addressing key policy
                    challenges. Additionally, I had the chance to collaborate
                    with a diverse team of professionals and learn about
                    government initiatives, socioeconomic issues, and the
                    policy-making process.
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
