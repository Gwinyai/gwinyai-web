import styles from "../styles/Application.module.css";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useMutation, gql } from "@apollo/client";
import classnames from "classnames";

const CREATE_PROSPECT = gql`
  mutation CreateProspect(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $experience: Experience!
    $availability: Availability!
    $course: [Course!]!
    $email: String!
  ) {
    createProspect(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      experience: $experience
      availability: $availability
      course: $course
      email: $email
    ) {
      id
      password
    }
  }
`;

const Application = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isNodeSelected, setNodeSelected] = useState(false);
  const [isReactSelected, setReactSelected] = useState(false);
  const [courseError, setCourseError] = useState("");
  const [skill, setSkill] = useState("BEGINNER");
  const [availability, setAvailability] = useState("MORNING");
  const [showAlert, setShowAlert] = useState(false);

  const [createProspect, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_PROSPECT, {
      onCompleted: (data) => {
        setShowAlert(true);
      },
      onError: (error) => {
        console.log(error.message);
      },
    });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("attempted submission");
    if (!!firstNameError || !!lastNameError || !!emailError || !!phoneError) {
      return;
    }
    if (!isNodeSelected && !isReactSelected) {
      setCourseError("Select at least one course");
      console.log("no course selected");
      return;
    }
    const selectedCourses = [];
    if (isNodeSelected) {
      selectedCourses.push("NODEJS");
    }
    if (isReactSelected) {
      selectedCourses.push("REACT");
    }
    createProspect({
      variables: {
        firstName,
        lastName,
        phoneNumber: "+263" + phoneNumber,
        experience: skill,
        availability,
        course: selectedCourses,
        email,
      },
    });
  };

  const handleFirstNameChange = (e) => {
    const firstName = e.target.value;
    if (firstName.length == 0) {
      setFirstNameError("First name is required");
      return;
    } else if (firstName.length < 2) {
      setFirstNameError("First name is too short");
      return;
    } else if (firstName.length > 35) {
      setFirstNameError("First name is too long");
      return;
    }
    setFirstNameError("");
    setFirstName(firstName);
  };

  const handleLastNameChange = (e) => {
    const lastName = e.target.value;
    if (lastName.length == 0) {
      setLastNameError("Last name is required");
      return;
    } else if (lastName.length < 2) {
      setLastNameError("Last name is too short");
      return;
    } else if (lastName.length > 35) {
      setLastNameError("Last name is too long");
      return;
    }
    setLastNameError("");
    setLastName(lastName);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const expression = /\S+@\S+/;
    let validEmail = expression.test(String(email).toLowerCase());
    if (!validEmail) {
      setEmailError("Email is invalid");
      return;
    }
    setEmailError("");
    setEmail(email);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    if (phone.length == 0) {
      setPhoneError("Phone number is required");
      return;
    } else if (!/^\d+$/.test(phone)) {
      setPhoneError("Only numbers are allowed");
      return;
    }
    setPhoneError("");
    setPhone(phone);
  };

  const handleNodeChange = (e) => {
    const isSelected = e.target.checked;
    setNodeSelected(isSelected);
    if (isSelected) {
      setCourseError("");
    }
  };

  const handleReactChange = (e) => {
    const isSelected = e.target.checked;
    setReactSelected(isSelected);
    if (isSelected) {
      setCourseError("");
    }
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  if (showAlert) {
    return (
      <div className="jumbotron verticalCenter">
        <div className="container">
          <Alert
            variant="success"
            onClose={() => {
              Router.push("/");
            }}
            dismissible
          >
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              Proceed to{" "}
              <a href="https://student.gwinyai.com">
                https://student.gwinyai.com
              </a>{" "}
              to enroll in the course and make payment. Your password has been
              sent to the email and phone number you provided in the
              application.
            </p>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Course Application</title>
        <meta
          name="description"
          content="Apply to the NodeJS and ReactJS master course."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="jumbotron verticalCenter">
        <div className="container">
          <h1 className={styles.title}>Course Application</h1>
          <p className={styles.detail}>
            When you submit this application, an automated message with your
            student account login details will be sent via email and SMS. Use
            your student account to make payment and enroll in the course.
          </p>
          {mutationError && (
            <div className="formError">{mutationError.message}</div>
          )}
          <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                name="firstname"
                className={`form-control`}
                placeholder="Enter First Name"
                id="firstname"
                autoFocus
                onChange={handleFirstNameChange}
              />
              <div className="formError">{firstNameError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                name="lastname"
                className={`form-control`}
                placeholder="Enter Last Name"
                onChange={handleLastNameChange}
                id="lastname"
              />
              <div className="formError">{lastNameError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className={`form-control`}
                placeholder="Enter Email"
                id="email"
                onChange={handleEmailChange}
              />
              <div className="formError">{emailError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <div className="input-group">
                <div
                  className="input-group-prepend"
                  style={{ margin: "15px 0 0 0" }}
                >
                  <span className="input-group-text">+263</span>
                </div>
                <input
                  name="phone"
                  className={`form-control`}
                  placeholder="Enter Phone Number"
                  id="phone"
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="formError">{phoneError}</div>
            </div>
            <div className="form-group">
              <label>Select Courses:</label>
              <div className={styles.checkboxSection}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="nodejs"
                    value="nodejs"
                    onChange={handleNodeChange}
                  />
                  <label className="form-check-label" htmlFor="nodejs">
                    NodeJS
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="reactjs"
                    value="reactjs"
                    onChange={handleReactChange}
                  />
                  <label className="form-check-label" htmlFor="nodejs">
                    ReactJS
                  </label>
                </div>
              </div>
              <div className="formError">{courseError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="skill">Your Skill Level with Javascript:</label>
              <select
                className="form-control"
                id="skill"
                name="skill"
                value={skill}
                onChange={handleSkillChange}
              >
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="PROFESSIONAL">Professional</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="time">Your Preferred Time for Lessons:</label>
              <select
                className="form-control"
                id="time"
                name="time"
                value={availability}
                onChange={handleAvailabilityChange}
              >
                <option value="MORNING">Morning</option>
                <option value="AFTERNOON">Afternoon</option>
                <option value="EVENING">Evening</option>
              </select>
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className={classnames(
                  "btn",
                  "btn-primary",
                  styles.submitButton
                )}
                disabled={mutationLoading}
              >
                {mutationLoading ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    &nbsp;&nbsp;<span className="sr-only">Loading...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Application;
