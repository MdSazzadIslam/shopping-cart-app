import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header: React.FC = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="navHeader">
          <Link to="/">Home</Link>
        </div>

        <div className="navCart">
          <Link to="/cart">
            Cart <div className="cartSpan">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
