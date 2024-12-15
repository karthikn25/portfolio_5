import { useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="topbar-logo">
          <span>K</span>
          <span>arthi</span>
          <span>K</span>
          <span>eya</span>
          <span>N</span>
        </div>
        <div className="nav">
          <ul>
            <li onClick={()=>navigate("/")}>HOME</li>
            <li onClick={()=>navigate("/about")}>ABOUT</li>
            <li onClick={()=>navigate("/service")}>SERVICE</li>
            <li onClick={()=>navigate("/project")}>PROJECTS</li>
            <li onClick={()=>navigate("/contact")}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
