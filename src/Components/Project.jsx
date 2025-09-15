import Base from "../Base/Base";
import work1 from "../images/Kings_cafe_dashboard.png";
import work2 from "../images/cafe_qr.png";
import work3 from "../images/E-shipin.png";
import work4 from "../images/JobPortal.png";
import work5 from "../images/Private_chat_app.png";
import work6 from "../images/instamart.png";
import work7 from "../images/crud.png";
import work8 from "../images/weather_station.png";
import work9 from "../images/e-shippin-mobile.png";
import work10 from '../images/Aesthetic.png'


export default function Project() {
const projects = [
    {
      name:"Printing Products Store",
      img: work10,
      links: [{ href: "https://aesthetic-trends-krr.netlify.app/", icon: "bx bx-globe" }],
      tech: ["Figma", "Vite-React", "NodeJs", "MongoDB", "Cloudinary", "Authentication", "Whatsapp Integration", "EmailJs"],
    },
    {
      name:"E-commerce Mobile App",
      img: work9,
      links: [
        { href: "https://github.com/karthikn25/e-shippin-mobile", icon: "bx bxl-github" },
        { href: "https://github.com/karthikn25/e-shippin-mobile/releases/download/v1.0.0/my-app.apk", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "React Native Expo", "NodeJs", "MongoDB", "Cloudinary", "Authentication", "RazorPay"],
    },
    {
      name:"Hotel Admin Dashboard",
      img: work1,
      links: [
        { href: "https://github.com/karthikn25/kings_cafe_frontend", icon: "bx bxl-github" },
        { href: "https://kingscaferestaurant.netlify.app/", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication"],
    },
    {
      name:"Hotel Menu Card",
      img: work2,
      links: [{ href: "https://github.com/karthikn25/kings_cafe_client", icon: "bx bxl-github" }],
      tech: ["Figma", "ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication"],
    },
    {
      name:"E-commerce WebApp",
      img: work3,
      links: [
        { href: "https://github.com/karthikn25/e-shippin-frontend", icon: "bx bxl-github" },
        { href: "https://e-shipin.netlify.app/", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication", "RazorPay"],
    },
    {
      name:"Weather Dashboard",
      img: work8,
      links: [
        { href: "https://github.com/karthikn25/weather_App", icon: "bx bxl-github" },
        { href: "https://weatherdetailsdashboard.netlify.app/", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "ReactJs", "WeatherApi"],
    },
    {
      name:"Job portal WebApp",
      img: work4,
      links: [
        { href: "https://github.com/karthikn25/jobportal_frontend", icon: "bx bxl-github" },
        { href: "https://jobwaveapp.netlify.app/", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication"],
    },
    {
      name:"Chat Web App(Frontend)",
      img: work5,
      links: [
        { href: "https://github.com/karthikn25/privateChat_frontend", icon: "bx bxl-github" },
        { href: "https://chatplayplan.netlify.app", icon: "bx bx-globe" },
      ],
      tech: ["Figma", "ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication", "Socket.IO"],
    },
    {
      name:"E-commerce(Frontend)",
      img: work6,
      links: [
        { href: "https://github.com/karthikn25/GoShop", icon: "bx bxl-github" },
        { href: "https://goshopapp.netlify.app", icon: "bx bx-globe" },
      ],
      tech: ["ReactJs"],
    },
    {
      name:"Company Data Manage App",
      img: work7,
      links: [
        { href: "https://github.com/karthikn25/deploytask-frontend", icon: "bx bxl-github" },
        { href: "https://crudappforworkers.netlify.app", icon: "bx bx-globe" },
      ],
      tech: ["ReactJs", "NodeJs", "MongoDB", "Cloudinary", "Authentication"],
    },
  ];


  return (
    <Base>
      <div className="">
        <div className="row">
          <div className="col">
            <div className="project-box-container">
              <marquee direction="right">⚠️ The backend is hosted on a free Render service. Initial load may take 5–10 minutes</marquee>
              <marquee>🔑 Test Login: <strong>Email</strong>: testemailtodevelop@gmail.com | <strong>Password</strong>: 12345678</marquee>
     
                  {projects.map((proj, index) => (
              <div key={index} className="project-box">
                <div className="project-box-content">
                  <div className="project-img">
                    <img src={proj.img} alt="projects" />
                  </div>
                  <div className="project-name" style={{textAlign:"center",paddingTop:"10px"}}>
                  <h6>{proj.name}</h6>
                  </div>
                  <div className="project-btn">
                    {proj.links.map((link, i) => (
                      <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>

                  <div className="tech-stack mt-2">
                    <h4>Tech Stack</h4>
                    <div className="project-stack">
                      {proj.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}     
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
