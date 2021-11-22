import * as React from "react";

export default function Experience() {
  return (
    <>
      <div className="section container">
        <h1 className="heading-primary">Experience</h1>
        <div className="section-skills">
          <h2 className="experience-heading">
            CTO at Cobbles LLC (2019 - 2021)
          </h2>
          <p className="experience-details">
            Responsible for leading the engineering team, holding sprint
            meetings, working with the design department and defining tasks
            using Jira. Helped the company go from prototype to alpha release
            that saw a $1 million seed raise and is currently securing Series A
            funding. Replaced the previous CTO and directed the overhaul of the
            app and backend to solve stability issues and scalability.
            Contributed code to the iOS app with Swift, the websites in ReactJS
            and the backend in NodeJS + GraphQL. Cobbles can be found here{" "}
            <a
              href="https://cobbl.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cobbl.es
            </a>
          </p>
          <h2 className="experience-heading">
            Udemy Course Instructor (2018 to 2021)
          </h2>
          <p className="experience-details">
            Created a course that teaches app design, UI/UX and iOS app
            development that went on to become a Udemy best-seller. The course
            has over 7500 students enrolled from around the world and over 840
            highly positive reviews. The course teaches Sketch, Figma, UI/UX
            best practice, how to build native iOS apps using Swift and how to
            create a custom interface using Core Animation, UI Kit and Core
            Graphics. Instructor profile can be found here{" "}
            <a
              href="https://www.udemy.com/user/gwinyai-nyatsoka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.udemy.com/user/gwinyai-nyatsoka/
            </a>
          </p>
          <h2 className="experience-heading">
            Tech Lead at Code Sage (2013 to 2018)
          </h2>
          <p className="experience-details">
            Responsible for digital media marketing and web app development.
            Lead the joint venture between DDHM and Code Sage. Created websites,
            apps and WebGL games. Helped clients get first page results for SEO
            and tens of thousands of followers on social media. Client accounts
            managed include Premier Travel, Meikles, Autoworld (General Motors),
            Goldtech Electronics, Truworths and Topics.
          </p>
        </div>
      </div>
      ;
    </>
  );
}
