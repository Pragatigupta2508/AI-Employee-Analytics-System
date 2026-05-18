import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="navbar">

      <Link to="/">
        Home
      </Link>

      <Link to="/register">
        Register
      </Link>

      <Link to="/employees">
        Employees
      </Link>

      <Link to="/ai">
        AI
      </Link>

    </div>
  );
}

export default Navbar;