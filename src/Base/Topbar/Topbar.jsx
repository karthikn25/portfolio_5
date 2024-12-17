import { useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="topbar-logo">
          <span className="color">K</span>
          <span>arthi</span>
          <span className="color">K</span>
          <span>eya</span>
          <span className="color">N</span>
        </div>
        <div className="nav">
          <ul>
            <li onClick={() => navigate("/")}>HOME</li>
            <li onClick={() => navigate("/about")}>ABOUT</li>
            <li onClick={() => navigate("/service")}>SERVICE</li>
            <li onClick={() => navigate("/project")}>PROJECTS</li>
            <li onClick={() => navigate("/contact")}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
