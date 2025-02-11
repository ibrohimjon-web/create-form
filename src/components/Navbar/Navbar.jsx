import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const count = useSelector((item) => item.user.value);
  return (
    <div className="navbar">
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/create-user"}>Create user</Link>
          </li>
          <li>
            <Link to={"/all-users"}>
              All User <sup>{count.length}</sup>
            </Link>
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
