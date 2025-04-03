import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h2>404</h2>
      <p>Oops! This page doesn’t exist</p>
      <Link className="heroBtn" to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
