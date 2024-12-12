import "./Topbar.css";

export default function Topbar() {
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
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
