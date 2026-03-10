import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <p>Single Page Application</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;
