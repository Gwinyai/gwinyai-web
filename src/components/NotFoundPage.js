import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  return (
    <div className="vertical-center">
      <div className="container">
        <h1>404</h1>
        <p>The page you were looking for was not found.</p>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
