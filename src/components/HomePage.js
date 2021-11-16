import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "../images/profile.png";

export default function HomePage() {
  const handleContactAction = () => {
    window.location.href = "mailto:gnyatsoka@gmail.com";
  };
  return (
    <>
      <div className="vertical-center">
        <div className="container">
          <main className="content">
            <img
              src={profilePic}
              className="profile-pic"
              alt="Gwinyai Nyatsoka"
            />
            <h1 className="title">Gwinyai Nyatsoka</h1>
            <h2 className="subtitle">
              iOS (Swift), NodeJS and ReactJS Developer
            </h2>
            <p className="detail">
              Gwinyai is CTO at <a href="https://cobbl.es">Cobbles LLC</a> based
              in Boston, Massachusetts. He is also a{" "}
              <a href="https://www.fingaz.co.zw/course-created-by-a-zimbabwean-course-attains-best-seller-status-on-udemy/">
                Udemy
              </a>{" "}
              best-selling iOS instructor with thousands of students across the
              globe.
            </p>
            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/paulthesage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gwinyai-nyatsoka-4a026037/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gwinyai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/3008901/gwinyai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@gwinyai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMedium} size="2x"></FontAwesomeIcon>
                </a>
              </li>
            </ul>
            <div className="buttons">
              {" "}
              <button className="button" onClick={handleContactAction}>
                Contact
              </button>{" "}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
