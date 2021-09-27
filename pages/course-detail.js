import { Accordion } from "react-bootstrap";
import Head from "next/head";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faGlobeAfrica,
  faLaptopCode,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

export const Detail = () => {
  const onApplyClick = () => {
    Router.push("/course-application");
  };

  return (
    <>
      <Head>
        <title>NodeJS and ReactJS Master Course</title>
        <meta
          name="description"
          content="Learn NodeJS and ReactJS from a Udemy best selling instructor and CTO of a Boston based startup."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 className="title-h1 topSpacing introContent">
          The Complete ReactJS and NodeJS Master Course
        </h1>
        <br />
        <br />
        <p className="introContent">
          Demand for remote developers has surged past demand making remote job
          positions more abundant. Demand has also surged because of the
          COVID-19 epidemic which has changed the way we work. Today, you can
          work for a foreign based company from the comfort of your home and
          earn a comfortable 5 figure salary in US dollars. You do not need a
          fancy degree, to have many years of experience or to belong to any
          developed nation to take advantage of this opportunity. All you need
          is an internet connection, a computer, the right skills and the
          ability to market yourself. How do I know this? I speak from
          experience. I work as a remote software developer for a Boston based
          startup as CTO, earning a 5 figure salary in US dollars all from my
          home in Harare.
        </p>
        <br />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onApplyClick}
          >
            Apply Now!
          </button>
        </div>
        <h3 className="topSpacing">
          <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
          &nbsp;&nbsp;Course Outcome
        </h3>
        <br />
        <p>
          I have put together a course aimed specifically at Zimbabweans to
          educate people in finding and securing remote developer positions.
          This course aims to teach NodeJS and ReactJS at a competency level
          high enough to find a remote developer position and to you teach how
          to market yourself.
        </p>
        <p>
          But why NodeJS and ReactJS, you wonder? Well, these are some of the
          most in demand programming frameworks around with an almost certain
          guarantee you will find an opportunity to make meaningful income. The
          average salary for a remote NodeJS or ReactJS developer is $72000 USD
          a year!
        </p>
        <br />
        <h3>
          <FontAwesomeIcon icon={faGlobeAfrica}></FontAwesomeIcon>
          &nbsp;&nbsp;World Class Learning Experience
        </h3>
        <br />
        <p>
          I have taught over 10,000 (yes, ten thousand) students from all around
          the world and earned the coveted Best Seller status for an iOS course
          I made an Udemy. Teaching has always been a past time hobby of mine
          but for the first time I will bring something tailored to my country.
          This course has everything I have found effective in teaching
          including study notes, interactive playgrounds and online tests in an
          online student portal I personally built (using NodeJS and ReactJS of
          course). I am flexible with online and in person classes. This is not
          a pre-made video course but involves live sessions where students have
          access to me in live streamed video or in person classes. For this
          reason, I have a limited places available. I cannot accomodate many
          people. Applications will be accepted on a first come first serve
          basis.
        </p>
        <br />
        <h3>
          <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
          &nbsp;&nbsp;Course Requirements
        </h3>
        <br />
        <p>
          You need a computer running Windows or Mac. If you would like
          in-person lessons you should have a laptop. You need an internet
          connection if you are taking live streamed lessons. Internet is
          provided for in-person lessons.
        </p>
        <br />
        <h3>
          <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
          &nbsp;&nbsp;Who is this course for?
        </h3>
        <br />
        <p>This course is perfect for the following people:</p>
        <li>Beginners looking to learn how to code.</li>
        <li>Students studying computer science or aspiring to do so.</li>
        <li>
          Intermediate developers looking to sharpen their NodeJS or ReactJS
          skills.
        </li>
        <li>People with a startup idea around an app or a website.</li>
        <li>People who would like to freelance creating websites or apps.</li>
        <li>People looking for remote developer job positions.</li>
        <li>
          People looking to immigrate on a work visa using their ReactJS and
          NodeJS skills.
        </li>
        <br />
        <p>
          This course is not useful to advanced ReactJS or NodeJS developers.
          This course is aimed towards beginners but intermediate developers
          might benefit. I will only be accepting people aged 16 years and above
          into this course.
        </p>
        <br />
        <h3>
          <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
          &nbsp;&nbsp;NodeJS Course Curriculum
        </h3>
        <br />
        <p>
          NodeJS is a popular Javascript platform used to build backend
          applications. A backend is what powers all websites and mobile apps on
          Android and iOS by providing a data storage and processing center.
          NodeJS is used by well known companies such as Netflix, Twitter and
          PayPal.
        </p>
        <p>
          We will learn MongoDB, GraphQL and ApolloServer to make our complete
          backend. MongoDB is a data storage technology used by big companies
          like Uber, Adobe and Forbes. MongoDB is what we call a NoSQL database
          and is a popular choice for startups because it is flexible and scales
          fast. GraphQL is an emerging alternative to REST APIs and is a must
          know technology. Created by Facebook, GraphQL was created to be more
          efficient at sending data over networks.
        </p>
        <br />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Part 1 - Javascript Fundamentals
            </Accordion.Header>
            <Accordion.Body className="accordion">
              <p>
                We learn the Javascript language using an interactive
                playground. We will look at ES6 and ES7 versions of Javascript
                which are some of the latest versions and utlize patterns such
                as asynchronous and object oriented programming. We cover all
                the fundamentals including variables, functions, classes and
                data structures.
              </p>
              <ul>
                <li>Installing Visual Studio Code Editor</li>
                <li>Types and Variables</li>
                <li>Operators</li>
                <li>Conditional Statements</li>
                <li>Switch</li>
                <li>Functions</li>
                <li>Arrays</li>
                <li>Objects</li>
                <li>Loops</li>
                <li>Events</li>
                <li>Classes</li>
                <li>Higher Order Functions</li>
                <li>Error Handling</li>
                <li>Arrow Functions</li>
                <li>Promises</li>
                <li>Async Await</li>
                <li>Dates</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Part 2 - Beginner NodeJS</Accordion.Header>
            <Accordion.Body>
              <p>
                We learn how to put together a simple NodeJS backend served
                locally. We will cover the MongoDB database and use the ODM
                Mongoose to structure our data. We cover what GraphQL is as
                opposed to a REST API and how to use Apollo server.
              </p>
              <ul>
                <li>Installing NodeJS and MongoDB</li>
                <li>Installing MongoDB Compass</li>
                <li>Introduction to MongoDB and Mongoose</li>
                <li>MongoDB Schema and Models</li>
                <li>MongoDB Queries</li>
                <li>Introduction to GraphQL</li>
                <li>GraphQL Schema, Types and Fields</li>
                <li>GraphQL Queries and Mutations</li>
                <li>Introduction to NodeJS</li>
                <li>An introduction to npm, packages, modules and imports</li>
                <li>An Introdution to ApolloServer</li>
                <li>
                  Putting together a backed with NodeJS, MongoDB and GraphQL
                </li>
                <li>An introduction to Git and Github</li>
                <li>Git repos</li>
                <li>Git commits</li>
                <li>Git push and cloning</li>
                <li>Creating a Github for our backend</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Part 3 - Intermediate NodeJS + Getting the Job
            </Accordion.Header>
            <Accordion.Body className="accordion">
              <p>
                We put everything we have learnt in parts 1 and 2 together to
                build a real world project. We will build a task manager app
                which connects to the React website. If you are taking the React
                course, what we build here is the backend our React project will
                use. As a bonus, I will walk you through what you need to know
                on finding remote jobs and opportunities so you can immediately
                start earning with everything you have learnt.
              </p>
              <ul>
                <li>An introduction to Heroku</li>
                <li>Creating a Heroku project</li>
                <li>An Introduction to MongoDB Cloud</li>
                <li>Connecting MongoDB and Heroku</li>
                <li>Deploying to Heroku</li>
                <li>CI/CD Pipelines</li>
                <li>Dev, staging and production environments</li>
                <li>MongoDB Middleware</li>
                <li>GraphQL Resolvers</li>
                <li>Configuration Variables</li>
                <li>Authentication with JSON web tokens</li>
                <li>Putting together a job portfolio</li>
                <li>Project Management</li>
                <li>Finding jobs</li>
                <li>Markting your skills</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <br />
        <h3>
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
          &nbsp;&nbsp;ReactJS (with Redux and Hooks) Course Curriculum
        </h3>
        <br />
        <br />
        <p>
          ReactJS is a popular Javascript framework used to build frontend
          applications like websites and mobile apps for iOS and Android. We
          will be focusing on building websites but what you will learn will be
          directly beneficial to building mobile apps using React Native.
          ReactJS was created by Facebook and has been used by established
          companies like Instagram, Netflix, Dropbox and AirBnB.
        </p>
        <p>
          We will learn how to build a complete ReactJS website using GraphQL to
          connect to our backend. If you are taking the NodeJS course, then you
          have the added benefit of building the backend we will use as we learn
          ReactJS.
        </p>
        <br />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Part 1 - Javascript Fundamentals
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We learn the Javascript language using an interactive
                playground. We will look at ES6 and ES7 versions of Javascript
                which are some of the latest versions and utlize patterns such
                as asynchronous and object oriented programming. We cover all
                the fundamentals including variables, functions, classes, DOM,
                events and data structures.
              </p>
              <ul>
                <li>Installing Visual Studio Code Editor</li>
                <li>HTML and CSS Crash Course</li>
                <li>Types and Variables</li>
                <li>Operators</li>
                <li>Conditional Statements</li>
                <li>Switch</li>
                <li>Functions</li>
                <li>Arrays</li>
                <li>Objects</li>
                <li>Loops</li>
                <li>Events</li>
                <li>Classes</li>
                <li>Higher Order Functions</li>
                <li>Error Handling</li>
                <li>Arrow Functions</li>
                <li>Promises</li>
                <li>Async Await</li>
                <li>Dates</li>
                <li>The DOM</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Part 2 - Beginner ReactJS</Accordion.Header>
            <Accordion.Body>
              <p>
                We learn the fundamentals of ReactJS. We learn how to style our
                React components, we learn about state, routing and how to
                respond to events. We also take our first look at Git and Github
                in this part of the course which we use for versioning.
              </p>
              <ul>
                <li>Using create-react-app</li>
                <li>React components</li>
                <li>Props and State</li>
                <li>Events and Methods</li>
                <li>React Dev Tools</li>
                <li>Lifecycle Methods</li>
                <li>Styling React</li>
                <li>React Router and Links</li>
                <li>Introducton to Redux</li>
                <li>Redux Dispatch</li>
                <li>Redux Reducers</li>
                <li>An introduction to Git and Github</li>
                <li>Git repos</li>
                <li>Git commits</li>
                <li>Git push and cloning</li>
                <li>Creating a Github for our React</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Part 3 - Intermediate ReactJS + Getting the Job
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We finally build a real world project. We build a task manager
                app that uses GraphQL backend built in the NodeJS course. We get
                into more advanced topics such as hooks, fragments and context.
                As a bonus, I will walk you through what you need to know on
                finding remote jobs and opportunities so you can immediately
                start earning with everything you have learnt.
              </p>
              <ul>
                <li>An introduction Apollo</li>
                <li>Using Apollo to connect to a GraphQL backend</li>
                <li>Queries and Mutations with GraphQL</li>
                <li>Form Validation</li>
                <li>CI/CD Pipelines</li>
                <li>Dev, staging and production environments</li>
                <li>MongoDB Middleware</li>
                <li>GraphQL Resolvers</li>
                <li>Authentication and Private Routes</li>
                <li>Hooks</li>
                <li>Pagination</li>
                <li>Fragments and Context</li>
                <li>Changing Head Title, Description and Meta</li>
                <li>Putting together a job portfolio</li>
                <li>Finding jobs</li>
                <li>Project Management</li>
                <li>Markting your skills</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
      </div>
    </>
  );
};

export default Detail;
