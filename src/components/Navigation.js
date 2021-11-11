import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/" className="main-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="main-nav-link">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="main-nav-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/courses" className="main-nav-link">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/experience" className="main-nav-link">
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
