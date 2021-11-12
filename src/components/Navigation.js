import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [navOpen, setNav] = useState(false);
  const showNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <>
      <header className={navOpen ? "nav-open header" : "header"}>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link onClick={closeNav} to="/" className="main-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/skills" className="main-nav-link">
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="/portfolio"
                className="main-nav-link"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/courses" className="main-nav-link">
                Courses
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="/experience"
                className="main-nav-link"
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav">
          <FontAwesomeIcon
            className="icon-mobile-nav"
            name="close-outline"
            icon={faTimes}
            size="2x"
            onClick={closeNav}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="icon-mobile-nav"
            name="menu-outline"
            icon={faBars}
            size="2x"
            onClick={showNav}
          ></FontAwesomeIcon>
        </button>
      </header>
    </>
  );
}
