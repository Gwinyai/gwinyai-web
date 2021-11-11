import course from "../images/course.jpg";
import reactlogo from "../images/reactlogo.jpg";

export default function Courses() {
  const handleViewCourseAction = () => {
    window.location.href =
      "https://www.udemy.com/course/app-design-uiux-plus-ios-development";
  };
  return (
    <>
      <div className="section container">
        <h1 className="heading-primary">Courses</h1>
        <div className="section-courses">
          <div className="course-image">
            <img src={course} />
          </div>
          <div className="course-details">
            <h2 className="heading-tertiary">
              iOS 12 and Swift 5 - App Design, UI/UX plus Development
            </h2>
            <p className="course-description">
              A Udemy best-selling course that teaches app design using Sketch
              or Figma and iOS app development with Swift.
            </p>
            <button className="button" onClick={handleViewCourseAction}>
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
