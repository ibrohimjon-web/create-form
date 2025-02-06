import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/create-user"}>Create user</Link>
          </li>
          <li>
            <Link to={"/all-users"}>All User</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
