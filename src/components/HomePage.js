import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/gwi.jpeg";

export default function HomePage() {
  const handleCallAction = () => {
    window.location.href = "tel:+263773213971";
  };
  const handleEmailAction = () => {
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
              Gwinyai is Founder at{" "}
              <a href="https://fullstacktuts.com">Full Stack Tuts</a>. He is
              also a{" "}
              <a href="https://www.udemy.com/user/gwinyai-nyatsoka/">Udemy</a>{" "}
              best-selling iOS instructor and a Fiverr's Choice awarded app
              developer coach on{" "}
              <a href="https://www.fiverr.com/gwinyai1312">Fiverr</a>.
            </p>
            <p className="detail">
              <a href="https://drive.google.com/file/d/12xzQPJZxbyHB01HgOzfqhjY_5h7QrDwo/view?usp=sharing">
                My Resume
              </a>
            </p>
            <ul className="social-list">
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
                  href="https://medium.com/@gwinyai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMedium} size="2x"></FontAwesomeIcon>
                </a>
              </li>
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
            </ul>
            <div className="buttons">
              <button className="button" onClick={handleEmailAction}>
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                Email
              </button>
              <button className="button" onClick={handleCallAction}>
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faPhone}
                ></FontAwesomeIcon>
                Call
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
