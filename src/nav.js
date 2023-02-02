import { NavLink } from "react-router-dom";
import "./nav.css";

export function Nav() {
  return (
    <div className="navDiv">
      <div className="logo">
        <img
          width="80px"
          alt=""
        />
      </div>
      <div className="navDiv-content">
        <ul>
          <li>
            <NavLink className="item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="item" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="item" to="/products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink className="item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
