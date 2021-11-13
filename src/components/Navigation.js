import { Link, useHistory, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export default function Navigation() {
  const history = useHistory();
  const [navOpen, setNav] = useState(false);
  /*
  useEffect is called when the component is mounting/rendered. Here we put a listener waiting for changes on the Link.
  */
  useEffect(() => {
    history.listen(() => {
      setNav(false);
    });
  });
  /*
  Instead of creating a showNav and closeNav functions, I use currying to have one function that handles a true or false parameter to open/close the menu.
  */
  const showNav = (navState) => (e) => {
    setNav(navState);
  };
  return (
    <>
      <header className={classNames({ "nav-open": navOpen, header: true })}>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink
                to="/"
                exact={true}
                className="main-nav-link"
                activeClassName="main-nav-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="main-nav-link"
                activeClassName="main-nav-active"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="main-nav-link"
                activeClassName="main-nav-active"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className="main-nav-link"
                activeClassName="main-nav-active"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="main-nav-link"
                activeClassName="main-nav-active"
              >
                Experience
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav">
          <FontAwesomeIcon
            className="icon-mobile-nav"
            name="close-outline"
            icon={faTimes}
            size="2x"
            onClick={showNav(false)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="icon-mobile-nav"
            name="menu-outline"
            icon={faBars}
            size="2x"
            onClick={showNav(true)}
          ></FontAwesomeIcon>
        </button>
      </header>
    </>
  );
}
